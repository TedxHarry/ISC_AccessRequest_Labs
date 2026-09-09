# Module 1: prepare before starting

Module 1 covers AR-001–009. It prepares the identities, target accounts and sessions needed for access requests. The first user-submitted business request follows in Module 2.

## Have these available

| Where | What you need | First used |
|---|---|---|
| ISC | Administrator who can manage sources, identity profiles, access profiles and roles | AR-001 |
| Windows AD workstation | Active Directory Users and Computers, permission to manage the dedicated AcmeLab area | AR-003 |
| AD source in ISC | Working read connection; correct account/group scopes | AR-003 |
| AD provisioning | Existing supported IQService/TLS setup and account/group write permissions | AR-005–006 |
| REST client | Postman or equivalent, administrator-owned API credentials kept private | AR-004 |
| Test email/sign-in | Three distinct controlled addresses and the tenant’s supported authentication route | AR-008 |
| Private evidence folder | Working HR file, journals and screenshots | Every lab |

On a Windows client, open **Active Directory Users and Computers** from Windows Tools or run `dsa.msc`. Server Manager > Tools is the Windows Server route. If the console is unavailable, arrange the AD administration tools before AR-003. You do not need to sign in to a domain controller to use a properly configured administration workstation.

An existing AD connection may read successfully while lacking write prerequisites. AR-005 assumes IQService and its secure connection are already installed/configured; it is not a complete IQService installation lab. AR-006’s real membership update and account creation prove that connection can perform the required writes.

## Keep the sequence and counts clear

| After | Expected course state |
|---|---|
| AR-001 | 24 HR accounts, 24 ISC identities; no AD account created by this import |
| AR-002 | 23 resolved manager relationships; Morgan is the one root |
| AR-003–004 | Lucas’s one standard AD account imported and linked; 14 business groups imported |
| AR-005 | Baseline group added: 15 course groups; saved creation settings, still no new Liam account |
| AR-006 | Lucas and Liam linked to AD accounts; both in baseline group |
| AR-007 | 24 standard AD accounts and 24 course baseline members |
| AR-008 | Lucas, Daniel and Priya can sign in separately using ordinary permissions |
| AR-009 | Recorded C01 with no unresolved provisioning failure; ready for the first business request |

Count course objects, not the entire tenant or source. When resuming, inspect what exists and continue at the first failed check. Do not create duplicate sources, accounts, groups or roles to repeat successful steps.

Create Account mappings affect new accounts. Existing Lucas attributes and later HR email changes need separate verification; the creation policy does not retroactively synchronize them. Reused standard accounts outside Users require an explicit layout/account-selection decision before later multi-account labs.

## What to practice here

Follow the HR department correction in AR-001 and the wrong-manager correction in AR-002. Prove the difference between an imported account and an identity, between correlation and creation, and between a successful operation and the actual AD result. Capture real failures if encountered. Deliberate connector permission faults belong to AR-048, after the working baseline is established.

[Begin AR-001](labs/AR-001/README.md) · [Continue AR-002](labs/AR-002/README.md) · [Course outline](README.md)
