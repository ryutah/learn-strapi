variable "project_id" {
  type = string
}

terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.1.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = "asia-northeast1"
}

resource "google_storage_bucket" "strapi_static_file" {
  name                        = "${var.project_id}-strapi-static-file"
  location                    = "asia-northeast1"
  uniform_bucket_level_access = true
}

data "google_iam_policy" "strapi_static_file_reader" {
  binding {
    role = "roles/storage.objectViewer"
    members = [
      "allUsers",
    ]
  }
}

resource "google_storage_bucket_iam_policy" "strapi_static_file_policy" {
  bucket      = google_storage_bucket.strapi_static_file.name
  policy_data = data.google_iam_policy.strapi_static_file_reader.policy_data
}
