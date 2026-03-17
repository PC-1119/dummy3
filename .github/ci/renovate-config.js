module.exports = {
  recreateClosed: true,
  hostRules: [
    {
      hostType: "docker",
      matchHost: "819004394028.dkr.ecr.us-east-1.amazonaws.com",
    }
  ],

  packageRules: [
    {
      matchPackageNames: ["django"],
      enabled: false,
    },
    {
      matchDatasources: ["docker"],
      versioning: "docker"
    },
    {
      matchPackagePatterns: [".*"],
      groupName: "all-dependencies",
      groupSlug: "all-dependencies",
      separateMajorMinor: false,
      separateMinorPatch: false,
    }
  ]
};
