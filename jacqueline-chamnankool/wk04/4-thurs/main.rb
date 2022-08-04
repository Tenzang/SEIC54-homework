require "sinatra"
require "sinatra/reloader"
require "sqlite3"

# INDEX
get "/" do
    @songs = query_db "SELECT * FROM Songs"
    erb :songs_index
end

# NEW
get "/songs/new" do
    erb :songs_new
end

# CREATE
post "/" do
    query_db "INSERT INTO Songs (title, artist, bpm, jacket, level, video) VALUES ('#{ params["title"] }', '#{ params["artist"] }', '#{ params["bpm"] }', '#{ params["jacket"] }', '#{ params["level"] }', '#{ params["video"] }')"
    redirect to("/")
end

# SHOW
get "/songs/:id" do
    @song = query_db "SELECT * FROM Songs WHERE id=#{ params[:id] }"
    # the above returns a hash so have to reset with .first
    @song = @song.first
    erb :songs_show
end

# EDIT
get "/songs/:id/edit" do
    @song = query_db "SELECT * FROM Songs WHERE id=#{ params[:id] }"
    @song = @song.first
    erb :songs_edit
end

# UPDATE
post "/songs/:id" do
    query_db "UPDATE Songs SET title='#{ params[:title] }', artist='#{ params[:artist] }', bpm='#{ params[:bpm] }', jacket='#{ params[:jacket] }', level='#{ params[:level] }', video='#{ params[:video] }' WHERE id=#{ params[:id] }"
    redirect to("/songs/#{ params[:id] }")
end

# DESTROY
get "/songs/:id/delete" do
    query_db "DELETE FROM Songs WHERE id=#{ params[:id] }"
    redirect to("/")
end

def query_db sql_statement
    puts sql_statement
    db = SQLite3::Database.new "database.sqlite3"
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close # do not forgor
    results
end