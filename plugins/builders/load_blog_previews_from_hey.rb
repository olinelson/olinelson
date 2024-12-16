require 'debug'
require 'rss'

class Builders::LoadBlogPreviewsFromHey < SiteBuilder
  def build
    hook :site, :post_read do
    get "https://world.hey.com/olivernelson/feed.atom" do |data|
      feed = RSS::Parser.parse(data)
      blog_post_previews = feed.items.map do |item|
        title = item.title.content
        published = item.published.content.to_s.split("T").at(0)
        content = item.content.content
        {title:, published:, content:}
      end

      site.data[:blog_post_previews] = blog_post_previews
    end
    end
  end
end
