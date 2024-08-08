import torch
from torch.utils.data import Dataset, DataLoader
import itertools
import csv
import numpy as np
import math


class PowerballDataset(Dataset):

    def __init__(self):
        # Powerball has 5 regular numbers from 1-69 and 1 powerball from 1-26
        self.nums = list(itertools.product(range(1, 11), repeat=5))
        self.nums = np.array(self.nums)

    def __len__(self):
        return len(self.nums)

    def __getitem__(self, idx):
        return self.nums[idx]


dataset = PowerballDataset()
dataloader = DataLoader(dataset=dataset, batch_size=10)
for data in dataloader:
    print(data)
    num_possibilities = math.factorial(69) / (math.factorial(64) * math.factorial(5))
    print(f"Number of possible combinations: {num_possibilities:,.0f}")
