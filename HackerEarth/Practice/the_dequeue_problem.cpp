#include<bits/stdc++.h>
#define endl '\n'
#define inf INT_MAX
#define pb push_back
#define der(c, x, y) ((c).find({x, y}) != (c).end())
#define base 999983
#define baseinv 943912055
#define ff first
#define ss second
#define V vector
#define L list
#define P pair
#define MP map
#define ST set
#define UM unordered_map
#define MM multimap
#define UMM unordered_multimap
#define MS multiset
#define US unordered_set
#define UMS unordered_multiset
#define PQ priority_queue
#define Graph list<int>*
#define tr1(x)                cerr << #x << ": " << x << endl;
#define tr2(x, y)             cerr << #x << ": " << x << " | " << #y << ": " << y << endl;
#define tr3(x, y, z)          cerr << #x << ": " << x << " | " << #y << ": " << y << " | " << #z << ": " << z << endl;
#define tr4(a, b, c, d)       cerr << #a << ": " << a << " | " << #b << ": " << b << " | " << #c << ": " << c << " | " << #d << ": " << d << endl;
#define tr5(a, b, c, d, e)    cerr << #a << ": " << a << " | " << #b << ": " << b << " | " << #c << ": " << c << " | " << #d << ": " << d << " | " << #e << ": " << e << endl;
#define tr6(a, b, c, d, e, f) cerr << #a << ": " << a << " | " << #b << ": " << b << " | " << #c << ": " << c << " | " << #d << ": " << d << " | " << #e << ": " << e << " | " << #f << ": " << f << endl;
#define all(a) (a).begin(),(a).end()
using namespace std;
typedef long long ll;
typedef unsigned long long ull;
typedef double dbl;
typedef long double ldbl;

V<int> arr;
ll n, ans = 0;

void solve(int i, int j){
    if(i > j) return;
    ll mn = inf, k = -1;
    for(int st = i; st <= j; st++){
        if(arr[st] <= mn) mn = arr[st], k = st;
    }
    ans = max(ans, (j - i + 1) * mn);
    solve(i, k - 1);
    solve(k + 1, j);
}

int main(){
    ios_base::sync_with_stdio(false),cin.tie(0),cout.tie(0);
    int test; cin >> test; while(test--){
        ans = 0;
        cin >> n;
        arr = V<int>(n, 0);
        for(auto &it : arr) cin >> it;
        solve(0, n - 1);
        cout << ans << endl;
    }
    return 0;
}

