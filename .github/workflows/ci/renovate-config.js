module.exports = {
  hostRules: [
    {
      hostType: 'docker', // tells Renovate this is a Docker registry
      matchHost: '819004394028.dkr.ecr.us-east-1.amazonaws.com',
      username: process.env.RENOVATE_AWS_ACCESS_KEY_ID,
      password: process.env.RENOVATE_AWS_SECRET_ACCESS_KEY,
      token: process.env.RENOVATE_AWS_SESSION_TOKEN,
    },
  ],
  packageRules: [
    {
      matchDatasources: ['docker'],
      matchPackageNames: [
        '819004394028.dkr.ecr.us-east-1.amazonaws.com/pythonbaseimage'
      ],
      versioning: 'docker',
    },
  ],
};
