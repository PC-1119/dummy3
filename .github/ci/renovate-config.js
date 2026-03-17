module.exports = {
  hostRules: [
    {
      hostType: "docker",
      matchHost: "819004394028.dkr.ecr.us-east-1.amazonaws.com",
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
