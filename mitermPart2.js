/**
 * Connects to a Mongo database and filters the data, printing only the names of the heroes
 * that meet the criteria.
 * 
 * @author Quinton Kulak
 * @version Fall 2021
 */

const {MongoClient} = require('mongodb')

/** Mongo connection string */
const uri = 'mongodb+srv://mrwoodring:toomanysecrets@cluster0.tcppw.mongodb.net/test'

/** declares the mongo client */
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

/** Sets collection to the location of the data we are filtering. */
const collection = client.db("myData").collection("superhero");

/**
 * This function connects to the database, and filters the data accordingly. It then logs
 * the name of each hero that meets the criteria.
 */
async function run () {
    try {
        await client.connect();
    
        var heroSearch = await collection.find(
            {
            $and: 
			[
				{ 
					name: 
					{
						$regex: 'Spider'
					}
				},
				
                {
                    Year: 
                    {
                        $lt: '1990'
                    } 
                },
                {
                    APPEARANCES: 
                    {
                        $gt: '1'
                    }
                }
			]
	}
            ).forEach(doc => console.log(doc.name));          
    
    } catch (e) {
        console.error(e);
    }finally {
            await client.close();
        }
}

run().then(process.exit);
