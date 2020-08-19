const bcrypt = require('bcryptjs')
bcrypt.hash('ping-password', 10).then(hash => console.log({ hash }))
