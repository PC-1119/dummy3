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
      versioning: "docker"
    },
    {
      matchPackagePatterns: [".*"],   // match all packages
      groupName: "all-dependencies",
      groupSlug: "all-dependencies",
      separateMajorMinor: false,
      separateMinorPatch: false
    }
  ]
};
