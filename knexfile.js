const sharedConfig = {
    client : 'sqlite3',
    migrations: {directory: './data/migrations'},
    useNullAsDefault: true,
    pool: {afterCreate: (conn , done)=> conn.run('PRAGMA foreign_keys = ON', done)}
}

module.exports = {
    development: {
        ...sharedConfig,
        connnection: { filename: './data/cook_book.db3'},
    },
    testing: {
        ...sharedConfig,
        connnection: {filename: './data/cook_book.test.db3'}
    },
    production: {
    }
}