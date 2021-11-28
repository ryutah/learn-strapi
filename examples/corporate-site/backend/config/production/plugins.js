module.exports = {
  upload: {
    provider: "google-cloud-storage",
    providerOptions: {
      bucketName: "#bucketName#",
      publicFiles: false,
      uniform: true,
      basePath: "",
    },
  },
};
