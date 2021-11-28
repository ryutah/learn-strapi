#!/usr/bin/env bash

cd $(dirname $0)/../resources

TF_VAR_project_id=$(gcloud config get-value project) terraform apply -auto-approve
