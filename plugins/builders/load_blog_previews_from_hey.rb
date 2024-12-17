require 'debug'
require 'rss'
require 'nokogiri'

class Builders::LoadBlogPreviewsFromHey < SiteBuilder
  def build
    hook :site, :post_read do
    get "https://world.hey.com/olivernelson/feed.atom" do |data|
      feed = RSS::Parser.parse(data)
      blog_post_previews = feed.items.slice(0,3).map do |item|
        title = item.title.content
        published = item.published.content.to_s.split("T").at(0)
        content = Nokogiri::HTML(item.content.content).text
        link = item.link.href
        {title:, published:, preview: "#{content.slice(0,100)}...", link: }
      end

      site.data[:blog_post_previews] = blog_post_previews
    end
    end
  end
end
