var config = {
    'mysql': {
        host: '192.168.0.106',
        user: 'hatlonely',
        password: process.env['PIPASSWD'] || '12345678',
        database: 'hatlonely'
    }
}

module.exports = config;
