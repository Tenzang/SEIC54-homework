require "sinatra"
require "sinatra/reloader"
require "active_record"

# Tedious configuration: next week, Rails will do this for you automatically
ActiveRecord::Base.establish_connection(
    :adapter => "sqlite3",
    :database => "database.sqlite3"
)

# Optional bonus: print SQL statement when executed
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: a class that is backed by a database
class Spouse < ActiveRecord::Base
end

class Show < ActiveRecord::Base
end

get "/" do
    erb :home
end

# INDEX
get "/spouses" do
    @spouses = Spouse.all
    erb :spouses_index
end

# NEW -- put more specific cases first (new vs :id)
get "/spouses/new" do
    erb :spouses_new
end

# CREATE
post "/spouses" do
    spouse = Spouse.new
    spouse.name = params[:name]
    spouse.description = params[:description]
    spouse.image = params[:image]
    spouse.save
    redirect to("/spouses/#{ spouse.id }") # GET request to SHOW
end

# SHOW
get "/spouses/:id" do
    @spouse = Spouse.find params[:id]
    erb :spouses_show
end

# EDIT
get "/spouses/:id/edit" do
    @spouse = Spouse.find params[:id]
    erb :spouses_edit
end

# UPDATE
post "/spouses/:id" do
    spouse = Spouse.find params[:id]
    spouse.name = params[:name]
    spouse.description = params[:description]
    spouse.image = params[:image]
    spouse.save
    redirect to("/spouses/#{ params[:id] }")
end

# DESTROY
get "/spouses/:id/delete" do
    spouse = Spouse.find params[:id]
    spouse.destroy
    redirect to("/spouses")
end

# # Series ================================================================================================================
# INDEX
get "/shows" do
    @shows = Show.all
    erb :shows_index
end

# NEW -- put more specific cases first (new vs :id)
get "/shows/new" do
    erb :shows_new
end

# CREATE
post "/shows" do
    show = Show.new
    show.title = params[:title]
    show.genre = params[:genre]
    show.studio = params[:studio]
    show.save
    redirect to("/shows/#{ show.id }")
end

get "/shows/:id" do
    @show = Show.find params[:id]
    erb :shows_show
end

# EDIT
get "/shows/:id/edit" do
    @show = Show.find params[:id]
    erb :shows_edit
end

# UPDATE
post "/shows/:id" do
    show = Show.find params[:id]
    show.title = params[:title]
    show.genre = params[:genre]
    show.studio = params[:studio]
    show.save
    redirect to("/shows/#{ show.id }")
end

# DESTROY
get "/shows/:id/delete" do
    show = Show.find params[:id]
    show.destroy
    redirect to("/shows")
end

after do
    ActiveRecord::Base.connection.close
end