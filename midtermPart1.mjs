/**
 * Program that reads the data from the link provided below. Takes in the data, then logs
 * the names of the colleges.
 * 
 * @author Quinton Kulak
 * @version Fall 2021
 */

/** imports fetch */
import fetch from "node-fetch";

/** The URI of the data */
const uri = 'http://universities.hipolabs.com/search?name=middle';

/**
 * The main function that gets the data. Reads the data and checks if the array
 * is empty.
 */
async function fetchJson() {
  try {
  let response = await fetch(uri);
  let data = await response.json();

  /** Checks if the array of data is empty. Prints a message if it is. */
  if (data.length != 0){
  data.forEach(doc => {
    console.log(doc.name);
  });
  } else{
    console.log("Data is null");
  }

  }
  catch (e) {
    console.error(e);
}finally {}
}

fetchJson();
