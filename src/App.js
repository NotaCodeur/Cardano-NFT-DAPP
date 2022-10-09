import React, { useState, useEffect, Component, useMemo, useCallback, useReducer, useRef } from 'react'
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import WalletTest from './pages/WalletTest';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space, Col } from 'antd';


// import stuff from the Cardano React wallet connector Github Clone
import { Tab, Tabs, RadioGroup, Radio, FormGroup, InputGroup, NumericInput } from "@blueprintjs/core";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
import "../node_modules/normalize.css/normalize.css";
import {
    Address,
    BaseAddress,
    MultiAsset,
    Assets,
    ScriptHash,
    Costmdls,
    Language,
    CostModel,
    AssetName,
    TransactionUnspentOutput,
    TransactionUnspentOutputs,
    TransactionOutput,
    Value,
    TransactionBuilder,
    TransactionBuilderConfigBuilder,
    TransactionOutputBuilder,
    LinearFee,
    BigNum,
    BigInt,
    TransactionHash,
    TransactionInputs,
    TransactionInput,
    TransactionWitnessSet,
    Transaction,
    PlutusData,
    PlutusScripts,
    PlutusScript,
    PlutusList,
    Redeemers,
    Redeemer,
    RedeemerTag,
    Ed25519KeyHashes,
    ConstrPlutusData,
    ExUnits,
    Int,
    NetworkInfo,
    EnterpriseAddress,
    TransactionOutputs,
    hash_transaction,
    hash_script_data,
    hash_plutus_data,
    ScriptDataHash, Ed25519KeyHash, NativeScript, StakeCredential
} from "@emurgo/cardano-serialization-lib-asmjs"
import "./App.css";
import { blake2b } from "blakejs";
let Buffer = require('buffer/').Buffer
let blake = require('blakejs')




// here is the Cardano wallet connector stuff for inside the App component


// export function handleWalletSelect2(obj, dispatchTwo, refreshData) {
//     console.log('handle wallet select')
//     console.log('obj.target', obj.target)
//     const whichWalletSelected = obj.target.value
//     dispatchTwo({
//         type: 'setwhichWalletSelected',
//         payload: whichWalletSelected
//     },
//         // () => {
//         //     refreshData()
//         // }
//     )
//     refreshData()
//     //  setState({whichWalletSelected},
//     //      () => {
//     //          this.refreshData()
//     //      })
// }


const { Header, Footer, Sider, Content } = Layout;






function App() {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'setRefs':
                return { ...state, refs: action.payload };

            case 'handleWalletSelect':
                console.log('dispatch handlewalletSelect, action.payload :', action.payload)
                handleWalletSelect(action.payload)
                return { ...state }

            case 'reload':
                return { ...state, reload: action.payload }
            default:
                throw new Error();
        }
    }

    const reducerTwo = (stateTwo, action) => {
        switch (action.type) {
            case 'setselectedTabId':
                return { ...stateTwo, selectedTabId: action.payload };

            case 'setwhichWalletSelected':
                return { ...stateTwo, whichWalletSelected: action.payload };

            case 'setwalletFound':
                console.log('dispatch walletFound, action.payload :', action.payload)
                return { ...stateTwo, walletFound: action.payload };

            case 'setwalletIsEnabled':
                console.log('dispatch walletIsEnabled, action.payload :', action.payload)
                return { ...stateTwo, walletIsEnabled: action.payload };

            case 'setwalletName':
                console.log('dispatch walletName, action.payload :', action.payload)
                return { ...stateTwo, walletName: action.payload };

            case 'setwalletIcon':
                console.log('dispatch walletIcon, action.payload :', action.payload)
                return { ...stateTwo, walletIcon: action.payload };

            case 'setwalletAPIVersion':
                console.log('dispatch walletAPIVersion, action.payload :', action.payload)
                return { ...stateTwo, walletAPIVersion: action.payload };

            case 'setwallets':
                console.log('dispatch wallets, action.payload :', action.payload)
                return { ...stateTwo, wallets: action.payload };




            case 'setnetworkId':
                console.log('dispatch networkId, action.payload :', action.payload)
                return { ...stateTwo, networkId: action.payload };

            case 'setUtxos':
                console.log('dispatch Utxos, action.payload :', action.payload)
                return { ...stateTwo, Utxos: action.payload };

            case 'setCollatUtxos':
                console.log('dispatch CollatUtxos, action.payload :', action.payload)
                return { ...stateTwo, CollatUtxos: action.payload };

            case 'setbalance':
                console.log('dispatch balance, action.payload :', action.payload)
                return { ...stateTwo, balance: action.payload };

            case 'setchangeAddress':
                console.log('dispatch changeAddress, action.payload :', action.payload)
                return { ...stateTwo, changeAddress: action.payload };

            case 'setrewardAddress':
                console.log('dispatch rewardAddress, action.payload :', action.payload)
                return { ...stateTwo, rewardAddress: action.payload };

            case 'setusedAddress':
                console.log('dispatch usedAddress, action.payload :', action.payload)
                return { ...stateTwo, usedAddress: action.payload };





            case 'settxBody':
                console.log('dispatch txBody, action.payload :', action.payload)
                return { ...stateTwo, txBody: action.payload };

            case 'settxBodyCborHex_unsigned':
                console.log('dispatch txBodyCborHex_unsigned, action.payload :', action.payload)
                return { ...stateTwo, txBodyCborHex_unsigned: action.payload };

            case 'settxBodyCborHex_signed':
                console.log('dispatch txBodyCborHex_signed, action.payload :', action.payload)
                return { ...stateTwo, txBodyCborHex_signed: action.payload };

            case 'setsubmittedTxHash':
                console.log('dispatch submittedTxHash, action.payload :', action.payload)
                return { ...stateTwo, submittedTxHash: action.payload };





            case 'setaddressBech32SendADA':
                console.log('dispatch addressBech32SendADA, action.payload :', action.payload)
                return { ...stateTwo, addressBech32SendADA: action.payload };

            case 'setlovelaceToSend':
                console.log('dispatch lovelaceToSend, action.payload :', action.payload)
                return { ...stateTwo, lovelaceToSend: action.payload };

            case 'setassetNameHex':
                console.log('dispatch assetNameHex, action.payload :', action.payload)
                return { ...stateTwo, assetNameHex: action.payload };

            case 'setassetPolicyIdHex':
                console.log('dispatch assetPolicyIdHex, action.payload :', action.payload)
                return { ...stateTwo, assetPolicyIdHex: action.payload };

            case 'setassetAmountToSend':
                console.log('dispatch assetAmountToSend, action.payload :', action.payload)
                return { ...stateTwo, assetAmountToSend: action.payload };

            case 'setaddressScriptBech32':
                console.log('dispatch addressScriptBech32, action.payload :', action.payload)
                return { ...stateTwo, addressScriptBech32: action.payload };

            case 'setdatumStr':
                console.log('dispatch datumStr, action.payload :', action.payload)
                return { ...stateTwo, datumStr: action.payload };

            case 'setplutusScriptCborHex':
                console.log('dispatch plutusScriptCborHex, action.payload :', action.payload)
                return { ...stateTwo, plutusScriptCborHex: action.payload };

            case 'settransactionIdLocked':
                console.log('dispatch transactionIdLocked, action.payload :', action.payload)
                return { ...stateTwo, transactionIdLocked: action.payload };

            case 'settransactionIndxLocked':
                console.log('dispatch transactionIndxLocked, action.payload :', action.payload)
                return { ...stateTwo, transactionIndxLocked: action.payload };

            case 'setlovelaceLocked':
                console.log('dispatch lovelaceLocked, action.payload :', action.payload)
                return { ...stateTwo, lovelaceLocked: action.payload };

            case 'setmanualFee':
                console.log('dispatch manualFee, action.payload :', action.payload)
                return { ...stateTwo, manualFee: action.payload };


            case 'replaceall':

                console.log('dispatch replaceall, action.payload :', action.payload)
                return { ...stateTwo, ...action.payload }
            default:
                throw new Error();
        }
    }

    const [stateTwo, dispatchTwo] = useReducer(reducerTwo, {
        selectedTabId: "1",
        whichWalletSelected: undefined,
        walletFound: false,
        walletIsEnabled: false,
        walletName: undefined,
        walletIcon: undefined,
        walletAPIVersion: undefined,
        wallets: [],

        networkId: undefined,
        Utxos: undefined,
        CollatUtxos: undefined,
        balance: undefined,
        changeAddress: undefined,
        rewardAddress: undefined,
        usedAddress: undefined,

        txBody: undefined,
        txBodyCborHex_unsigned: "",
        txBodyCborHex_signed: "",
        submittedTxHash: "",

        addressBech32SendADA: "addr_test1qrt7j04dtk4hfjq036r2nfewt59q8zpa69ax88utyr6es2ar72l7vd6evxct69wcje5cs25ze4qeshejy828h30zkydsu4yrmm",
        lovelaceToSend: 3000000,
        assetNameHex: "4c494645",
        assetPolicyIdHex: "ae02017105527c6c0c9840397a39cc5ca39fabe5b9998ba70fda5f2f",
        assetAmountToSend: 5,
        addressScriptBech32: "addr_test1wpnlxv2xv9a9ucvnvzqakwepzl9ltx7jzgm53av2e9ncv4sysemm8",
        datumStr: "12345678",
        plutusScriptCborHex: "4e4d01000033222220051200120011",
        transactionIdLocked: "",
        transactionIndxLocked: 0,
        lovelaceLocked: 3000000,
        manualFee: 900000,
    })

    const [state, dispatch] = useReducer(reducer, {
        refs: { 'hero': null, 'roadmap': null, 'art': null, 'team': null, 'faq': null },
        reload: false
    })

    useEffect(() => {
        // dispatch({type: 'setRefs', payload: {'roadmap': roadmap, 'art': art, 'team': team, 'faq': faq}})
        console.log('state: ', state)
    }, [state])

    /**
     * When the wallet is connect it returns the connector which is
     * written to this API variable and all the other operations
     * run using this API object
     */
    let API = undefined;

    /**
     * Protocol parameters
     * @type {{
     * keyDeposit: string,
     * coinsPerUtxoWord: string,
     * minUtxo: string,
     * poolDeposit: string,
     * maxTxSize: number,
     * priceMem: number,
     * maxValSize: number,
     * linearFee: {minFeeB: string, minFeeA: string}, priceStep: number
     * }}
     */
    const protocolParams = {
        linearFee: {
            minFeeA: "44",
            minFeeB: "155381",
        },
        minUtxo: "34482",
        poolDeposit: "500000000",
        keyDeposit: "2000000",
        maxValSize: 5000,
        maxTxSize: 16384,
        priceMem: 0.0577,
        priceStep: 0.0000721,
        coinsPerUtxoWord: "34482",
    }

    //  pollWallets = pollWallets.bind();

    /**
* Poll the wallets it can read from the browser.
* Sometimes the html document loads before the browser initialized browser plugins (like Nami or Flint).
* So we try to poll the wallets 3 times (with 1 second in between each try).
*
* Note: CCVault and Eternl are the same wallet, Eternl is a rebrand of CCVault
* So both of these wallets as the Eternl injects itself twice to maintain
* backward compatibility
*
* @param count The current try count.
*/
    const pollWallets = (count = 0) => {
        console.log('pollWallets() ')
        const wallets = [];
        for (const key in window.cardano) {
            // console.log('key :', key)
            // console.log(window.cardano)
            if (window.cardano[key].enable && wallets.indexOf(key) === -1) {
                wallets.push(key);
            }
        }
        if (wallets.length === 0 && count < 3) {
            // console.log('wallets.length = 0')
            setTimeout(() => {
                pollWallets(count + 1);
            }, 1000);
            return;
        }
        // console.log('wallets[] :', wallets)
        // console.log('wallets[0] :', wallets[0])
        // console.log('count :', count)

        dispatchTwo({
            type: 'setwallets',
            payload: wallets
        })
        dispatchTwo({
            type: 'setwhichWalletSelected',
            payload: wallets[0]
        })
        
    }


    useEffect(() => {
        if (stateTwo.whichWalletSelected) {
            console.log('whickWallet', stateTwo.whichWalletSelected)
            refreshData()
        }
    }, [stateTwo.whichWalletSelected])




    /**
     * Handles the tab selection on the user form
     * @param tabId
     */
    const handleTabId = (tabId) => dispatchTwo({ type: "setselectedTabId", payload: tabId })



    /**
     * Generate address from the plutus contract cborhex
     */
    const generateScriptAddress = () => {
        // cborhex of the alwayssucceeds.plutus
        // const cborhex = "4e4d01000033222220051200120011";
        // const cbor = Buffer.from(cborhex, "hex");
        // const blake2bhash = blake.blake2b(cbor, 0, 28);

        const script = PlutusScript.from_bytes(Buffer.from(stateTwo.plutusScriptCborHex, "hex"))
        // const blake2bhash = blake.blake2b(script.to_bytes(), 0, 28);
        const blake2bhash = "67f33146617a5e61936081db3b2117cbf59bd2123748f58ac9678656";
        const scripthash = ScriptHash.from_bytes(Buffer.from(blake2bhash, "hex"));

        const cred = StakeCredential.from_scripthash(scripthash);
        const networkId = NetworkInfo.testnet().network_id();
        const baseAddr = EnterpriseAddress.new(networkId, cred);
        const addr = baseAddr.to_address();
        const addrBech32 = addr.to_bech32();

        // hash of the address generated from script
        console.log(Buffer.from(addr.to_bytes(), "utf8").toString("hex"))

        // hash of the address generated using cardano-cli
        const ScriptAddress = Address.from_bech32("addr_test1wpnlxv2xv9a9ucvnvzqakwepzl9ltx7jzgm53av2e9ncv4sysemm8");
        console.log(Buffer.from(ScriptAddress.to_bytes(), "utf8").toString("hex"))


        console.log(ScriptAddress.to_bech32())
        console.log(addrBech32)

    }

    /**
     * Checks if the wallet is running in the browser
     * Does this for Nami, Eternl and Flint wallets
     * @returns {boolean}
     */

    const checkIfWalletFound = () => {
        console.log('checkIfWalletFound()')
        console.log('window.cardano :', window.cardano)
        console.log('whichWalletSelected :', stateTwo.whichWalletSelected)
        const walletKey = stateTwo.whichWalletSelected;
        console.log('walletKey: ', walletKey)
        console.log('window?.cardano: ', window?.cardano)
        console.log('window?.cardano. hasOwnProperty: ', !!window?.cardano?.['nami'])
        const walletString = walletKey.toString()

        console.log('walletKey.toString(): ', walletString)
        const walletFound = !!window?.cardano?.[walletString];
        console.log('walletFound :', walletFound)

        dispatchTwo({ type: 'setwalletFound', payload: walletFound })
        //  this.setState({walletFound})
        return walletFound;
    }

    /**
     * Checks if a connection has been established with
     * the wallet
     * @returns {Promise<boolean>}
     */
    const checkIfWalletEnabled = async () => {
        console.log('checkIfWalletIsEnabled')
        let walletIsEnabled = false;

        try {
            const walletName = stateTwo.whichWalletSelected;
            console.log('walletName: ', walletName)
            walletIsEnabled = await window.cardano[walletName].isEnabled();
        } catch (err) {
            console.log(err)
        }
        dispatchTwo({ type: 'setwalletIsEnabled', payload: walletIsEnabled })
        //  this.setState({walletIsEnabled});

        return walletIsEnabled;
    }

    /**
     * Enables the wallet that was chosen by the user
     * When this executes the user should get a window pop-up
     * from the wallet asking to approve the connection
     * of this app to the wallet
     * @returns {Promise<boolean>}
     */

    const enableWallet = async () => {
        const walletKey = stateTwo.whichWalletSelected;
        console.log('walletKey', walletKey)
        try {
            API = await window.cardano[walletKey].enable();
        } catch (err) {
            console.log(err);
        }
        return checkIfWalletEnabled();
    }

    /**
     * Get the API version used by the wallets
     * writes the value to state
     * @returns {*}
     */
    const getAPIVersion = () => {
        const walletKey = stateTwo.whichWalletSelected;
        const walletAPIVersion = window?.cardano?.[walletKey].apiVersion;
        console.log('getAPIVersion ', walletAPIVersion)
        dispatchTwo({ type: 'setwalletAPIVersion', payload: walletAPIVersion })
        //  this.setState({walletAPIVersion})
        return walletAPIVersion;
    }

    /**
     * Get the name of the wallet (nami, eternl, flint)
     * and store the name in the state
     * @returns {*}
     */

    const getWalletName = async () => {
        const walletKey = stateTwo.whichWalletSelected;
        const walletName = window?.cardano?.[walletKey].name;
        console.log('walletName :', walletName)
        await dispatchTwo({ type: 'setwalletName', payload: walletName })
        //  this.setState({walletName})
        return walletName;
    }

    /**
     * Gets the Network ID to which the wallet is connected
     * 0 = testnet
     * 1 = mainnet
     * Then writes either 0 or 1 to state
     * @returns {Promise<void>}
     */
    const getNetworkId = async () => {
        try {
            const networkId = await API.getNetworkId();
            dispatchTwo({ type: 'setnetworkId', payload: networkId })
            //  this.setState({networkId})

        } catch (err) {
            console.log(err)
        }
    }

    /**
     * Gets the UTXOs from the user's wallet and then
     * stores in an object in the state
     * @returns {Promise<void>}
     */

    const getUtxos = async () => {

        let Utxos = [];

        try {
            const rawUtxos = await API.getUtxos();

            for (const rawUtxo of rawUtxos) {
                const utxo = TransactionUnspentOutput.from_bytes(Buffer.from(rawUtxo, "hex"));
                const input = utxo.input();
                const txid = Buffer.from(input.transaction_id().to_bytes(), "utf8").toString("hex");
                const txindx = input.index();
                const output = utxo.output();
                const amount = output.amount().coin().to_str(); // ADA amount in lovelace
                const multiasset = output.amount().multiasset();
                let multiAssetStr = "";

                if (multiasset) {
                    const keys = multiasset.keys() // policy Ids of thee multiasset
                    const N = keys.len();
                    // console.log(`${N} Multiassets in the UTXO`)


                    for (let i = 0; i < N; i++) {
                        const policyId = keys.get(i);
                        const policyIdHex = Buffer.from(policyId.to_bytes(), "utf8").toString("hex");
                        // console.log(`policyId: ${policyIdHex}`)
                        const assets = multiasset.get(policyId)
                        const assetNames = assets.keys();
                        const K = assetNames.len()
                        // console.log(`${K} Assets in the Multiasset`)

                        for (let j = 0; j < K; j++) {
                            const assetName = assetNames.get(j);
                            const assetNameString = Buffer.from(assetName.name(), "utf8").toString();
                            const assetNameHex = Buffer.from(assetName.name(), "utf8").toString("hex")
                            const multiassetAmt = multiasset.get_asset(policyId, assetName)
                            multiAssetStr += `+ ${multiassetAmt.to_str()} + ${policyIdHex}.${assetNameHex} (${assetNameString})`
                            // console.log(assetNameString)
                            // console.log(`Asset Name: ${assetNameHex}`)
                        }
                    }
                }


                const obj = {
                    txid: txid,
                    txindx: txindx,
                    amount: amount,
                    str: `${txid} #${txindx} = ${amount}`,
                    multiAssetStr: multiAssetStr,
                    TransactionUnspentOutput: utxo
                }
                Utxos.push(obj);
                // console.log(`utxo: ${str}`)
            }
            dispatchTwo({ type: 'setUtxos', payload: Utxos })
            // this.setState({ Utxos })
        } catch (err) {
            console.log(err)
        }
    }

    /**
     * The collateral is need for working with Plutus Scripts
     * Essentially you need to provide collateral to pay for fees if the
     * script execution fails after the script has been validated...
     * this should be an uncommon occurrence and would suggest the smart contract
     * would have been incorrectly written.
     * The amount of collateral to use is set in the wallet
     * @returns {Promise<void>}
     */
    const getCollateral = async () => {

        let CollatUtxos = [];

        try {

            let collateral = [];

            const wallet = stateTwo.whichWalletSelected;
            if (wallet === "nami") {
                collateral = await API.experimental.getCollateral();
            } else {
                collateral = await API.getCollateral();
            }

            for (const x of collateral) {
                const utxo = TransactionUnspentOutput.from_bytes(Buffer.from(x, "hex"));
                CollatUtxos.push(utxo)
                // console.log(utxo)
            }
            dispatchTwo({ type: 'setCollatUtxos', payload: CollatUtxos })
            // this.setState({ CollatUtxos })
        } catch (err) {
            console.log(err)
        }

    }

    /**
     * Gets the current balance of in Lovelace in the user's wallet
     * This doesnt resturn the amounts of all other Tokens
     * For other tokens you need to look into the full UTXO list
     * @returns {Promise<void>}
     */
    const getBalance = async () => {
        try {
            const balanceCBORHex = await API.getBalance();

            const balance = Value.from_bytes(Buffer.from(balanceCBORHex, "hex")).coin().to_str();
            dispatchTwo({ type: 'setbalance', payload: balance })
            // this.setState({ balance })

        } catch (err) {
            console.log(err)
        }
    }

    /**
     * Get the address from the wallet into which any spare UTXO should be sent
     * as change when building transactions.
     * @returns {Promise<void>}
     */
    const getChangeAddress = async () => {
        try {
            const raw = await API.getChangeAddress();
            const changeAddress = Address.from_bytes(Buffer.from(raw, "hex")).to_bech32()
            dispatchTwo({ type: 'setchangeAddress', payload: changeAddress })
            // this.setState({ changeAddress })
        } catch (err) {
            console.log(err)
        }
    }

    /**
     * This is the Staking address into which rewards from staking get paid into
     * @returns {Promise<void>}
     */
    const getRewardAddresses = async () => {

        try {
            const raw = await API.getRewardAddresses();
            const rawFirst = raw[0];
            const rewardAddress = Address.from_bytes(Buffer.from(rawFirst, "hex")).to_bech32()
            // console.log(rewardAddress)
            dispatchTwo({ type: 'setrewardAddress', payload: { rewardAddress } })
            // this.setState({ rewardAddress })

        } catch (err) {
            console.log(err)
        }
    }

    /**
     * Gets previsouly used addresses
     * @returns {Promise<void>}
     */
    const getUsedAddresses = async () => {

        try {
            const raw = await API.getUsedAddresses();
            const rawFirst = raw[0];
            const usedAddress = Address.from_bytes(Buffer.from(rawFirst, "hex")).to_bech32()
            // console.log(rewardAddress)
            dispatchTwo({ type: 'setusedAddress', payload: usedAddress })
            // this.setState({ usedAddress })

        } catch (err) {
            console.log(err)
        }
    }

    /**
     * Refresh all the data from the user's wallet
     * @returns {Promise<void>}
     */
    const refreshData = async () => {
        console.log('refreshing data')
        generateScriptAddress()

        try {
            const walletFound = checkIfWalletFound();
            if (walletFound) {
                await getAPIVersion();
                await getWalletName();
                const walletEnabled = await enableWallet();
                if (walletEnabled) {
                    await getNetworkId();
                    await getUtxos();
                    await getCollateral();
                    await getBalance();
                    await getChangeAddress();
                    await getRewardAddresses();
                    await getUsedAddresses();
                } else {
                    await dispatchTwo({
                        type: 'replaceall',
                        payload: {
                            ...stateTwo,
                            Utxos: null,
                            CollatUtxos: null,
                            balance: null,
                            changeAddress: null,
                            rewardAddress: null,
                            usedAddress: null,

                            txBody: null,
                            txBodyCborHex_unsigned: "",
                            txBodyCborHex_signed: "",
                            submittedTxHash: "",
                        }
                    })

                    // await this.setState({
                    //     Utxos: null,
                    //     CollatUtxos: null,
                    //     balance: null,
                    //     changeAddress: null,
                    //     rewardAddress: null,
                    //     usedAddress: null,

                    //     txBody: null,
                    //     txBodyCborHex_unsigned: "",
                    //     txBodyCborHex_signed: "",
                    //     submittedTxHash: "",
                    // });
                }
            } else {

                await dispatchTwo({
                    type: 'replaceall',
                    payload: {
                        ...stateTwo,

                        walletIsEnabled: false,

                        Utxos: null,
                        CollatUtxos: null,
                        balance: null,
                        changeAddress: null,
                        rewardAddress: null,
                        usedAddress: null,

                        txBody: null,
                        txBodyCborHex_unsigned: "",
                        txBodyCborHex_signed: "",
                        submittedTxHash: "",
                    }
                })

                // await this.setState({
                //     walletIsEnabled: false,

                //     Utxos: null,
                //     CollatUtxos: null,
                //     balance: null,
                //     changeAddress: null,
                //     rewardAddress: null,
                //     usedAddress: null,

                //     txBody: null,
                //     txBodyCborHex_unsigned: "",
                //     txBodyCborHex_signed: "",
                //     submittedTxHash: "",
                // });
            }
        } catch (err) {
            console.log(err)
        }
    }

    /**
     * Handles the radio buttons on the form that
     * let the user choose which wallet to work with
     * @param obj
     */
    function handleWalletSelect(obj) {
        console.log('handle wallet select')
        console.log('obj.target', obj.target)
        const whichWalletSelected = obj.target.value
        dispatchTwo({
            type: 'setwhichWalletSelected',
            payload: whichWalletSelected
        }
            //, () => {
            // }
        )

        refreshData()
        //  setState({whichWalletSelected},
        //      () => {
        //          this.refreshData()
        //      })
    }

    useEffect(() => {


        pollWallets();
        // refreshData();
        //   return () => {
        //   }
    }, [])


    useEffect(() => {
        // pollWallets();
        // refreshData();
        console.log('useEffect stateTwo.whichWalletSelected', stateTwo.whichWalletSelected)

    }, [stateTwo])

    useEffect(() => {
        console.log('useEffect state.reload', state.reload);
        if (state.reload === true) {
            refreshData();
            dispatch({ type: 'reload', payload: false })
        }

        return () => {
            if (state.reload === true) {
            }
        }
    }, [state.reload])


    // componentDidMount() {
    //     pollWallets();
    //     await refreshData();
    // }



    return (
        <div className="App">
            {/* <div className='navbar'>
        <Navbar />
      </div> */}

            <div className='main'>
                <Layout>
                    <div style={{ background: '#f1f2f6' }} className='routes'>
                        <Switch>
                            <Route exact path='/'>
                                <Homepage state={state} dispatch={dispatch} stateTwo={stateTwo} dispatchTwo={dispatchTwo} />
                            </Route>
                            <Route exact path='/app'>
                                <WalletTest />
                            </Route>
                        </Switch>
                    </div>
                </Layout>

            </div>





            <div className='footer'>

                <div style={{ height: '100px', paddingTop: '40px' }}>
                    <p>
                        This is a footer  <code>src/App.js</code> we can put company info here.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        policy
                    </a>
                </div>

            </div>


        </div>
    );
}


export default App;
