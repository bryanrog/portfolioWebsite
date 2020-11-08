package com.portfolio.webpage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import javax.persistence.*;
import java.util.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@Entity
public class issLocation {
	private @Id @GeneratedValue Long id;
	private double currentLatitude;
	private double currentLongitude;
	//private Date currentTime;
	private long unixTime;
	
	public issLocation() {
		
	
	}
	
	public issLocation(double lat, double longi, long time) {
		this.currentLatitude = lat;
		this.currentLongitude = longi;
		this.unixTime = time;
	}
	
	

	public void updateCurrentISSLocation() {
		URL url;
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
				if (node.path("message").toString().equals("success")) {
					this.currentLatitude = node.path("iss_position").path("latitude").asDouble();
					this.currentLongitude = node.path("iss_position").path("longitude").asDouble();
					this.unixTime = node.path("timestamp").asLong();
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
		
	}
	
	
	//getters and setters
	public double getCurrentLatitude() {
		return currentLatitude;
	}
	

	public double getCurrentLongitude() {
		return currentLongitude;
	}

	public long getUnixTime() {
		return unixTime;
	}

	public void setCurrentLatitude(double currentLatitude) {
		this.currentLatitude = currentLatitude;
	}

	public void setCurrentLongitude(double currentLongitude) {
		this.currentLongitude = currentLongitude;
	}

	public void setUnixTime(long unixTime) {
		this.unixTime = unixTime;
	}



	public Long getId() {
		return id;
	}
	
	
	
	
	
}