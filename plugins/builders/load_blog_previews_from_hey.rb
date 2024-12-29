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
          published = item.published.content.strftime("%B %d, %Y")
          content = Nokogiri::HTML(item.content.content).text
          link = item.link.href
          preview = "#{content.slice(0,100)}..."
          {title:, published:, preview:, link: }
        end
        site.data[:blog_post_previews] = blog_post_previews
      end
    end
  end
end
