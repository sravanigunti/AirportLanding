# AirportLanding
# Problem Statement:

Build a flight landing schedule where pilots can identify a closest airport for his plane to land. A plane is in the air. The pilot would use this program to search for the closest airport in the area. The 
airport should be able to accommodate the size of the plane. For example, if the plane size is 737, the airport must be a large one.

  1) Availability according to the size of the plane
  2) Closest distance based on plane's location

# Solution:

As part of the solution, I wrote using java script and jQuery as I found a JSON file online from below link, which saved my time in building up a model.

Reference: https://raw.githubusercontent.com/jbrooksuk/JSON-Airports/master/airports.json

I used the JSON file and calculated the closest airport near to the current location and I displayed both latitude and longitude at my current location and when I click on Search Airport 
button, the closest airport appears on the screen along with the size of the airport.

# Executing the file:
    1. To execute the code, extract the file and double click on “index.html” file (make sure 
    you open the file in Internet Explorer). 
    
    2. Enable the location settings on your computer. 
    
    3. On loading the page, you will be able to check the latitude and longitude of the current 
    location you’re staying. 
    
    4. On clicking the “Search Airport” button, the airport nearest to your current location will 
    be displayed along with the size of the airport.

# Stages in Execution:
  1. On opening index.html page using Internet Explorer.On loading the page we get the current latitude and longitude values and a button to check for airports nearby.
  2. When you execute, you can see that the values of latitude and longitude change dynamically as I have used Google APIs to location current location.
  3. When I click on Search Airport button, the airport closest to the current location will be retrieved.
  4. When Google Locations is not enabled in your system, you will see the error message.
