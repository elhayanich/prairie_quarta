import json
import random

def groupes(k):
    names = json.load(open("apprenants.json"))  
    random.shuffle(names)  
    return [names[i:i + k] for i in range(0, len(names), k)]  

# Exemple avec k = 2
for i, Team in enumerate(groupes(2), 1):
    print(f"Team {i}: {Team}")