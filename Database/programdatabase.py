import sqlite3
import os

db_file = 'database.db'
conn = sqlite3.connect(r'C:\Users\User\Documents\Proga\database.db')

cur = conn.cursor()
cur.execute("""CREATE TABLE if not exists users(
     id int primary key,
     comment text,
     alex text);""")
conn.commit()
cur.execute("""INSERT INTO users(id, comment, coord, tone)
                        values('4', 'good', '23.51', 'pos'), ('5', 'badperfomance', '52.54', 'neg'), ('6', 'trash', '93.44', 'pos');
                        """)
conn.commit()
print('Done')
