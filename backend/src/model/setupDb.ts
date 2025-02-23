import sqlite3 from 'sqlite3';
import sqlite, {open, Database} from 'sqlite';


export async function connectToDB(dbFile: string): Promise<sqlite.Database> {

    const db = await open({
        filename: dbFile,
        driver: sqlite3.Database
    })

    return db
}



async function createDataModel(db: Database ): Promise<void> {

    const qr: string = `CREATE TABLE task (
        db_pk INTEGER PRIMARY KEY, 
        id TEXT NOT NULL, 
        name TEXT NOT NULL,
        completed BYTE NOT NULL)`

    try {
        const result = await db.exec(qr)
    } catch (error) {
        console.log('Failed to create data model')
        console.log(error)
    }    
    
    return;

}


async function checkForDataModel(db: Database ): Promise<void> {

    const result = await db.all("SELECT * FROM sqlite_master WHERE type='table'")

    if (result.length == 0) createDataModel(db)
    
    await db.close()

    return;

}


export async function setupDB(): Promise<void> {

    const dbFile = './db/task.db'
    
    if (typeof dbFile === 'undefined') {
        throw new Error("Env var `dbFile` is not defined")
    }
    

    const db = await connectToDB(dbFile)
    checkForDataModel(db)
    
    console.log('hello world')
    return;
}
