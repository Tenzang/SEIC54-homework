



# p lines[:lineN]

def route(startLine,startStop)
    lines = {
        :lineN => ["Times Square","34th","28th","23rd","Union Square","8th"],
        :lineL => ["8th", "6th", "Union Square", "3rd", "1st"],
        :line6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square"]
    }

    lineNstops = lines[:lineN]
    lineLStops = lines[:lineL]
    line6stopa = lines[:line6]

    lineSelect = startLine

    

    if startLine == "lineN"
        puts lineNstops
    elsif startLine == "line6"
        puts line6stops
    elsif startLine == "lineL"
        puts lineLStops
    end

    numberOfStops = 0;

    journey = []
=begin
    if startLine == "lineN" or startLine == "lineL" or startLine == "lineS"
        while 
            puts "This stop is #{stop}"
        #lines[startStop].each { |line| 
            #puts "This line has Stops: #{line}"
       #}
    end
end
=end
p 
end

route('lineN', "Times square")
