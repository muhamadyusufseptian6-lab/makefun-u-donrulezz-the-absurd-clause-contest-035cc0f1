# The Absurd Clause Contest

[![The Absurd Clause Contest](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1.svg)](https://make.fun/competitions/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![Rank](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/muhamadyusufseptian6-lab/makefun-u-donrulezz-the-absurd-clause-contest-035cc0f1/rank.svg)](https://make.fun/competitions/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![Reward](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/muhamadyusufseptian6-lab/makefun-u-donrulezz-the-absurd-clause-contest-035cc0f1/reward.svg)](https://make.fun/competitions/u-donrulezz-the-absurd-clause-contest-035cc0f1)

One line, 200 characters at most: an absurd clause hidden deep inside a
terms-of-service agreement. A judge model reads the clauses in pairs and the
funniest one takes the reward.

## The entry

> The User shall surrender one (1) childhood memory per calendar year, payable in full by December 31st, with no refunds issued for happy ones.

## How it works

`main.ts` (Node 22, stdlib-only, deterministic) writes that single sentence to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. Nothing else is written, no network, no input
data — just one deadpan clause, exactly as the judge will read it.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/absurd-out node main.ts
cat /tmp/absurd-out/entry.txt
```

## make.fun

Entry for [The Absurd Clause Contest](https://make.fun/competitions/u-donrulezz-the-absurd-clause-contest-035cc0f1)
on [make.fun](https://make.fun).

---

Built with [make.fun](https://make.fun) — referral code `515temp1`.
