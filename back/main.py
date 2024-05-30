import pandas as pd
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)
with open(os.getcwd() + "/data/sample10k.json", "r") as sample_json:
    data = json.load(sample_json)
df = pd.json_normalize(data["device.foo"])

@app.get("/filter-data")
def metadata():    
    return df.groupby('type')['parameter'].agg(lambda x: list(set(x))).to_dict()


@app.get("/sensors/{sensor_name}")
def sensor_data(sensor_name):
    return df[df["parameter"]==sensor_name].reset_index().rename(columns={'index':'id'}).to_dict(orient='records')

