import pandas as pd

# -----------------------------
# 1. Create Sample Dataset
# -----------------------------
data = {
    'Date': [
        '2026-01-03',
        '2026-01-01',
        '2026-01-05',
        '2026-01-02',
        '2026-01-04'
    ],
    'Sales': [200, 100, 300, 150, 250]
}

df = pd.DataFrame(data)

# -----------------------------
# 2. Convert Date column to datetime
# -----------------------------
df['Date'] = pd.to_datetime(df['Date'])

# -----------------------------
# 3. Sort dataset by Date
# -----------------------------
df = df.sort_values(by='Date').reset_index(drop=True)

# -----------------------------
# 4. Compute 3-day Moving Average
# -----------------------------
df['3_Day_Moving_Avg'] = df['Sales'].rolling(window=3).mean()

# -----------------------------
# 5. Display Final Result
# -----------------------------
print("Sales Trend with 3-Day Moving Average:\n")
print(df)

# -----------------------------
# Optional: Save to CSV
# -----------------------------
df.to_csv("sales_with_moving_average.csv", index=False)