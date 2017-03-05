const repoSchema = {
  'title': 'repository schema',
  'description': 'describes a single repository',
  'version': 0,
  'type': 'object',
  'properties': {
      'key': {
        'type': 'string',
        'primary': true // juse string of id
      },
      'id': {
        'type': 'number'
      },
      'name': {
        'type': 'string',
      },
      'fullName': {
        'type': 'string'
      },
      'owner': {
        'type': 'number'
      },
      'private': {
        'type': 'boolen'
      },
      'htmlUrl': {
        'type': 'string'
      },
      'description': {
        'type': 'string'
      },
      'fork': {
        'type': 'boolen'
      },
      'url': {
        'type': 'string'
      },
      'forksUrl': {
        'type': 'string'
      },
      'keysUrl': {
        'type': 'string'
      },
      'collaboratorsUrl': {
        'type': 'string'
      },
      'teamsUrl': {
        'type': 'string'
      },
      'hooksUrl': {
        'type': 'string'
      },
      'issueEventsUrl': {
        'type': 'string'
      },
      'eventsUrl': {
        'type': 'string'
      },
      'assigneesUrl': {
        'type': 'string'
      },
      'branchesUrl': {
        'type': 'string'
      },
      'tagsUrl': {
        'type': 'string'
      },
      'blobsUrl': {
        'type': 'string'
      },
      'gitTagsUrl': {
        'type': 'string'
      },
      'gitRefsUrl': {
        'type': 'string'
      },
      'treesUrl': {
        'type': 'string'
      },
      'statusesUrl': {
        'type': 'string'
      },
      'languagesUrl': {
        'type': 'string'
      },
      'stargazersUrl': {
        'type': 'string'
      },
      'contributorsUrl': {
        'type': 'string'
      },
      'subscribersUrl': {
        'type': 'string'
      },
      'subscriptionUrl': {
        'type': 'string'
      },
      'commitsUrl': {
        'type': 'string'
      },
      'gitCommitsUrl': {
        'type': 'string'
      },
      'commentsUrl': {
        'type': 'string'
      },
      'issueCommentUrl': {
        'type': 'string'
      },
      'contentsUrl': {
        'type': 'string'
      },
      'compareUrl': {
        'type': 'string'
      },
      'mergesUrl': {
        'type': 'string'
      },
      'archiveUrl': {
        'type': 'string'
      },
      'downloadsUrl': {
        'type': 'string'
      },
      'issuesUrl': {
        'type': 'string'
      },
      'pullsUrl': {
        'type': 'string'
      },
      'milestonesUrl': {
        'type': 'string'
      },
      'notificationsUrl': {
        'type': 'string'
      },
      'labelsUrl': {
        'type': 'string'
      },
      'releasesUrl': {
        'type': 'string'
      },
      'deploymentsUrl': {
        'type': 'string'
      },
      'createdAt': {
        'type': 'string'
      },
      'createdTime': {
        'type': 'number'
      },
      'updatedAt': {
        'type': 'string'
      },
      'updatedTime': {
        'type': 'number'
      },
      'pushedAt': {
        'type': 'string'
      },
      'pushedTime': {
        'type': 'number'
      },
      'gitUrl': {
        'type': 'string'
      },
      'sshUrl': {
        'type': 'string'
      },
      'cloneUrl': {
        'type': 'string'
      },
      'svnUrl': {
        'type': 'string'
      },
      'homePage': {
        'type': 'string'
      },
      'size': {
        'type': 'number'
      },
      'stargazersCount': {
        'type': 'number'
      },
      'stars': {
        'type': 'number'
      },
      'watchersCount': {
        'type': 'number'
      },
      'lang': {
        'type': 'string'
      },
      'hasIssues': {
        'type': 'boolen'
      },
      'hasDownloads': {
        'type': 'boolen'
      },
      'hasWiki': {
        'type': 'boolen'
      },
      'hasPages': {
        'type': 'boolen'
      },
      'forksCount': {
        'type': 'number'
      },
      'mirrorUrl': {
        'type': 'string'
      },
      'openIssuesCount': {
        'type': 'number'
      },
      'forks': {
        'type': 'number'
      },
      'openIssues': {
        'type': 'number'
      },
      'watchers': {
        'type': 'number'
      },
      'defaultBranch': {
        'type': 'string'
      },
      'permissions': {
        'type': 'object',
        'properties': {
          'admin': {
            'type': 'boolen'
          },
          'push': {
            'type': 'boolen'
          },
          'pull': {
            'type': 'boolen'
          }
        }
      },
      'SCTags': {
        'type': 'array',
        'maxItems': 100,
        'uniqueItems': true,
        'item': 'number'
      },
      'SCCategories': {
        'type': 'array',
        'maxItems': 10,
        'uniqueItems': true,
        'item': 'number'
      },
      'score': {
          'type': 'number' // 0~5
      },
      'flag': {
          'type': 'boolen'
      },
      'read': {
          'type': 'boolen'
      },
      'remark': {
          'type': 'string'
      }
  },
  'required': ['id', 'name', 'owner', 'htmlUrl', 'createdAt', 'createdTime', 'updatedAt', 'updatedTime', 'pushedAt', 'pushedTime', 'forks', 'watchers', 'stars', 'defaultBranch', 'openIssues']
}

export default repoSchema
