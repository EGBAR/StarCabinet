import * as accounts        from './accounts'
import * as network         from './network'
import * as db              from './db'
import * as repos           from './repos'
import * as conditions      from './conditional'
import * as profile         from './profile'
import * as languages       from './languages'
import * as categories      from './categories'

export default Object.assign(
    {},
    accounts,
    network,
    db,
    repos,
    conditions,
    profile,
    languages,
    categories
)
