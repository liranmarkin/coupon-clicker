import requests
import sys

URL = 'localhost:3000/coupons'

def main(argv):
    if len(argv) < 2:
        print('Usage: {} <filename>'.format(argv[0]))
        sys.exit(1)

    coupons = open(argv[1], 'r').read()
    print(coupons)
    res = requests.post(URL, json=coupons)
    print(res)
