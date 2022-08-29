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

    p 
end

route('lineN', "Times square")