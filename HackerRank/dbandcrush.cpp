// {{{ #includes
#include <algorithm>
#include <limits.h>
#include <bitset>
#include <cmath>
#include <cstdio>
#include <cstdlib>
#include <ctime>
#include <deque>
#include <functional>
#include <iomanip>
#include <iostream>
#include <list>
#include <map>
#include <numeric>
#include <queue>
#include <set>
#include <sstream>
#include <stack>
#include <utility>
#include <vector>
#include <string.h>
#include <string>
#include <unordered_map>
// }}}
// {{{ #define
#define pb push_back
#define ff first
#define ss second
#define mp make_pair
#define um unordered_map
#define clear(x) memset ((x),0,sizeof((x)))
#define fill(x,y) memset((x),y,sizeof((x)))
#define si(x) int x; scan(x);
#define sl(x) ll x; scan(x);
#define FOR(i,x,y) for(ll i = (x) ; i <= (y) ; ++i)
#define ROF(i,x,y) for(ll i = (y) ; i >= (x) ; --i)
#define sz(a) int((a).size())
#define len(a) int ((a).length())
#define foreach(i,c) for(auto i = (c).begin(); i != (c).end(); i++)
#define all(x) (x).begin(),(x).end()
#define present(c,x) ((c).find(x) != (c).end())
#define cpresent(c,x) (find(all(c),x) != (c).end())
#define min(a,b) ((a)<(b)?(a):(b))
#define max(a,b) ((a)>(b)?(a):(b))
#define lcm(x,y) (((x)/gcd((x),(y)))*(y))
#define abs(x) ((x)<0?-(x):(x))
#define sq(x) ((x)*(x))
#define gc getchar_unlocked
#define pc putchar_unlocked
using namespace std;
// }}}
// {{{ typedefs
typedef long long int ll;
typedef unsigned long long int ull;
typedef vector<int> vi;
typedef vector<ll> vl;
typedef pair < int, int > pii;
typedef pair < ll, ll > pll;
typedef pair<string,int> psi;
typedef pair<int,string> pis;
typedef vector<pii> vii;
typedef vector<vi> vvi;
typedef vector<vl> vvl;
const ll inf = 2147383647;
// }}}
// {{{ fast I/O
    template<typename T>
inline void scan(T &x)
{
    bool neg=false;
    x=0;
    int c=gc();
    for(;(c<48 || c>57) && c!='-';c=gc());
    if(c=='-')
    {
        neg=true;
        c=gc();
    }
    for(;c>47 && c<58;c=gc())
    {
        x=(x<<1)+(x<<3)+c-48;
    }
    x=neg==true?-x:x;
}
    template<typename T>
inline void write(T x)
{
    bool neg=false;
    char buffer[200];
    int i=0;
    if(x<0)
    {
        x=-x;
        neg=true;
    }
    do
    {
        buffer[i++]=(x%10)+'0';
        x/=10;
    } while(x);
    i--;
    if(neg==true)
    {
        i++;
        buffer[i]='-';
    }
    while(i>=0) pc(buffer[i--]);
    pc('\n');
}
// }}}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    si(size);
    int a=0,b=0,c=0;
    FOR(i,0,size-1)
    {
        si(temp);
        if(temp==1)
        {
            a++;
        }
        else if(temp==2)
        {
            b++;
        }
        else
        {
            c++;
        }
    }
    int res=max(a,max(b,c));
    res=a+b+c-res;
    write(res);
    return 0;
}

