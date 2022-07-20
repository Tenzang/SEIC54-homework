require 'pry'

nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
lLine = ['8th', '6th', 'Union Square', '3rd', '1st'];
sixLine = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

numStops = 0;
travelStops = '';

def planTrip (startLine, start, endLine, destination)
    endlineArr = false;
    startLineArr = false; 

    if(startLine === 'N')
        startLineArr = nLine;
    end
    
    if(startLine === 'L') 
        startLineArr = lLine;
    end
    
    if(startLine === '6')
        startLineArr = sixLine;
    end
        
    if(endLine === 'N')
        endlineArr = nLine; 
    end
     
    if(endLine === 'L') 
        endlineArr = lLine;
    end
    
    if(endLine === '6') 
        endlineArr = sixLine;
    end
    

    if (startLine === endLine)
        if (startLine === 'N')
            travelForwardsSameLine(startLineArr, start, destination);
            stopsBetweenStartDestination(startLineArr, start, destination);
            loggingInfoSameLine(start, destination);
        elsif (startLine === '6')
            travelForwardsSameLine(startLineArr, start, destination);
            stopsBetweenStartDestination(startLineArr, start, destination);
            loggingInfoSameLine(start, destination);
        elsif (startLine === 'L')
            travelForwardsSameLine(startLineArr, start, destination);
            stopsBetweenStartDestination(startLineArr, start, destination);
            loggingInfoSameLine(start, destination);
        else
            travelToUnion(startLineArr, start);
            travelFromUnion(endlineArr, destination);
            stopsBetweenStartDestinationDifferent(startLineArr, start);
            stopsBetweenEndDestination(endlineArr, destination);
            loggingInfoDifferentLine(start, destination);
        end
    end
        
    numStops = 0;
    travelStops = '';
end

# def travelForwardsSameLine (startLine, start, destination)
#     for (let i = startLine.indexOf(start); i < startLine.indexOf(destination); i++)
#         numStops++;
#     end
# end

# def travelBackwardsSameLine (startLine, start, destination)
#     for (let i = startLine.indexOf(start); i < startLine.indexOf(destination); i--)
#         numStops++;
#     end  
# end

# def travelToUnion (startLine, start)
#     for (let i = startLine.indexOf(start); i < startLine.indexOf('Union Square'); i++)
#         numStops++;
#     end
# end

# def travelFromUnion (startLine, destination)
#     for (let i = startLine.indexOf('Union Square'); i < startLine.indexOf(destination); i++)
#         numStops++;
#     end
# end

def loggingInfoSameLine (start, destination)
    puts "You are at #{start} and going to #{destination}"
    puts "You must travel through the following stops: #{travelStops}"
    # puts "Your journey continues through the following stops: "
    puts "${numStops} stops in total."
end

def loggingInfoDifferentLine (start, destination)
    puts "You are at #{start} and going to #{destination}"
    puts "You must travel through the following stops: #{travelStops}"
    # puts "Your journey continues through the following stops: ""
    puts 'Change at Union Square'
    puts "#{numStops} stops in total."
end

# def stopsBetweenStartDestination (startLine, start, destination)
#     for (let i = startLine.indexOf(start) + 1; i < startLine.indexOf(destination); i++)
#         travelStops += startLine[i] + ' '
#     end
# end

# def stopsBetweenStartDestinationDifferent (startLine, start)
#     for (let i = startLine.indexOf(start) + 1 i < startLine.indexOf('Union Square') i++)
#         travelStops += startLine[i] + ' '
#     end
# end

# def stopsBetweenEndDestination (startLine, destination)
#     for (let i = startLine.indexOf('Union Square') i < startLine.indexOf(destination) + 1 i++)
#         travelStops += startLine[i] + ' '
#     end
# end

binding.pry