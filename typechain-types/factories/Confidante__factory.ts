/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Confidante, ConfidanteInterface } from "../Confidante";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_password",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_password",
        type: "bytes32",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040526040516102a93803806102a98339818101604052810190610025919061006d565b806000819055505061009a565b600080fd5b6000819050919050565b61004a81610037565b811461005557600080fd5b50565b60008151905061006781610041565b92915050565b60006020828403121561008357610082610032565b5b600061009184828501610058565b91505092915050565b610200806100a96000396000f3fe6080604052600436106100225760003560e01c80638e19899e1461002e57610029565b3661002957005b600080fd5b34801561003a57600080fd5b5061005560048036038101906100509190610120565b610057565b005b806000541461009b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610092906101aa565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156100e1573d6000803e3d6000fd5b5050565b600080fd5b6000819050919050565b6100fd816100ea565b811461010857600080fd5b50565b60008135905061011a816100f4565b92915050565b600060208284031215610136576101356100e5565b5b60006101448482850161010b565b91505092915050565b600082825260208201905092915050565b7f496e636f72726563742070617373776f72640000000000000000000000000000600082015250565b600061019460128361014d565b915061019f8261015e565b602082019050919050565b600060208201905081810360008301526101c381610187565b905091905056fea26469706673582212200f5314ff7d9816863db930ed667a3514d0e57a54408b65373eaef9b6321c965764736f6c63430008120033";

type ConfidanteConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConfidanteConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Confidante__factory extends ContractFactory {
  constructor(...args: ConfidanteConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _password: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<Confidante> {
    return super.deploy(_password, overrides || {}) as Promise<Confidante>;
  }
  override getDeployTransaction(
    _password: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_password, overrides || {});
  }
  override attach(address: string): Confidante {
    return super.attach(address) as Confidante;
  }
  override connect(signer: Signer): Confidante__factory {
    return super.connect(signer) as Confidante__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConfidanteInterface {
    return new utils.Interface(_abi) as ConfidanteInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Confidante {
    return new Contract(address, _abi, signerOrProvider) as Confidante;
  }
}