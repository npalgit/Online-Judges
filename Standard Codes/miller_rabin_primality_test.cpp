ll mulmod(ll a, ll b, ll c) {
    ll x=0, a=a%c;
    while (b) {
        if (b&1)x=(x+a)%c;
        a=(a<<1)%c;
        b>>=1;
    }
    return x%c;
}

ll fpow(ll x, ll n, ll mod) {
    ll ret=1;
    while (n) {
        if (n&1)ret=mulmod(ret,x,mod);
        x=mulmod(x,x,mod);
        n>>= 1;
    }
    return ret;
}

bool isPrime(ll n) {
    if(n==2)return 1;
    if(n<2 || n%2==0)return 0;
    ll d=n-1;
    int s=0;
    while(d%2==0) {
        s++;
        d>>=1;
    }
    // It's guranteed that these values will work for any number smaller than 3*10**18 (3 and 18 zeros)
    int a[9] = { 2, 3, 5, 7, 11, 13, 17, 19, 23 };
    for(int i = 0; i < 9; i++) {
        bool comp = fpow(a[i], d, n) != 1;
        if(comp) for(int j = 0; j < s; j++) {
            ll fp = fpow(a[i], (1LL << (ll)j)*d, n);
            if (fp == n - 1) {
                comp = false;
                break;
            }
        }
        if(comp) return false;
    }
    return true;
}
