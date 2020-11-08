package com.portfolio.webpage;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


@Component
public class DatabaseLoader implements CommandLineRunner {
	private issLocationRepository repository;
	
	@Autowired
	public DatabaseLoader(issLocationRepository r) {
		this.repository = r;
	}
	

	@Override
	public void run(String... args) throws Exception {
		
		double arr[] = this.updateCurrentISSLocation();
		issLocation currentLocation = this.repository.save(new issLocation(arr[0], arr[1], (long) arr[2]));
		
		while (true) {
			Thread.sleep(120000);
			arr = this.updateCurrentISSLocation();
			currentLocation.setCurrentLatitude(arr[0]);
			currentLocation.setCurrentLongitude(arr[1]);
			currentLocation.setUnixTime((long) arr[2]);
			this.repository.save(currentLocation);
		}
		
		
	}
	
	public double[] updateCurrentISSLocation() {
		URL url;
		double returnArray[] = new double[3];
		try {
			url = new URL("http://api.open-notify.org/iss-now.json");
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			con.setRequestProperty("User-Agent",  "Mozilla/5.0");
			int responseCode = con.getResponseCode();
			if (responseCode == HttpURLConnection.HTTP_OK) {
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String line;
				StringBuffer response = new StringBuffer();
				while ((line = in.readLine()) != null) {
					response.append(line);
				}
				ObjectMapper mapper = new ObjectMapper();
				JsonNode node = mapper.readTree(response.toString());
				System.out.println(node.toString());
				if ( true /*node.path("message").toString().equals("success") */) {
					System.out.println("Updating the location");
					returnArray[2] = node.path("timestamp").asDouble();
					
					
					 returnArray[0]= node.path("iss_position").path("latitude").asDouble();
					returnArray[1] = node.path("iss_position").path("longitude").asDouble();					
					
				}
			}
			else {
				System.out.println("Bad request");
				
			}
		} catch (MalformedURLException e) {
			System.out.println("Bad request");
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return returnArray;
		
	}
	
	
}
