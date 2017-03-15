const authorSchema = {
    'title': 'author schema',
    'description': 'describes a single repository owner/contributors',
    'version': 0,
    'type': 'object',
    'properties': {
        'key': {
            'type': 'string',
            'primary': true // juse string of id
        },
        'id': {
            'type': 'integer',
            'index': true
        },
        'login': {
            'type': 'string',
            'index': true
        },
        'isOwner': {
            'type': 'bool' // owner / contributor
        },
        'repoId': {
            'type': 'integer'
        },
        'avatarUrl': {
            'type': 'string'
        },
        'gravatarId': {
            'type': 'string'
        },
        'url': {
            'type': 'string'
        },
        'htmlUrl': {
            'type': 'string'
        },
        'followersUrl': {
            'type': 'string'
        },
        'followingUrl': {
            'type': 'string'
        },
        'gistsUrl': {
            'type': 'string'
        },
        'starredUrl': {
            'type': 'string'
        },
        'subscriptionsUrl': {
            'type': 'string'
        },
        'organizationsUrl': {
            'type': 'string'
        },
        'reposUrl': {
            'type': 'string'
        },
        'eventsUrl': {
            'type': 'string'
        },
        'receivedEventsUrl': {
            'type': 'string'
        },
        'type': {
            'type': 'string'
        },
        'siteAdmin': {
            'type': 'boolen'
        }
    },
    'required': ['id', 'login']
}

export default authorSchema
