module.exports = {
  hostRules: [
    {
      hostType: "docker",
      matchHost: "819004394028.dkr.ecr.us-east-1.amazonaws.com",
      username: process.env.RENOVATE_AWS_ACCESS_KEY_ID,
      password: process.env.RENOVATE_AWS_SECRET_ACCESS_KEY
    }
  ],

  packageRules: [
    {
      matchDatasources: ["docker"],
      matchPackageNames: [
        "819004394028.dkr.ecr.us-east-1.amazonaws.com/pythonbaseimage"
      ],
      versioning: "docker"
    }
  ]
};
