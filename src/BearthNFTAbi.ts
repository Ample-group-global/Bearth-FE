export default {
  _format: "hh3-artifact-1",
  contractName: "BearthNFT",
  sourceName: "contracts/BearthNFT.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "n",
          type: "string",
        },
        {
          internalType: "string",
          name: "s",
          type: "string",
        },
        {
          internalType: "string",
          name: "u",
          type: "string",
        },
        {
          internalType: "address",
          name: "m",
          type: "address",
        },
        {
          internalType: "address",
          name: "fixedAddr",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "AccessControlBadConfirmation",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "neededRole",
          type: "bytes32",
        },
      ],
      name: "AccessControlUnauthorizedAccount",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "numerator",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "denominator",
          type: "uint256",
        },
      ],
      name: "ERC2981InvalidDefaultRoyalty",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "ERC2981InvalidDefaultRoyaltyReceiver",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "numerator",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "denominator",
          type: "uint256",
        },
      ],
      name: "ERC2981InvalidTokenRoyalty",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "ERC2981InvalidTokenRoyaltyReceiver",
      type: "error",
    },
    {
      inputs: [],
      name: "ERC721EnumerableForbiddenBatchMint",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "ERC721IncorrectOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ERC721InsufficientApproval",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "approver",
          type: "address",
        },
      ],
      name: "ERC721InvalidApprover",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "ERC721InvalidOperator",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "ERC721InvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "ERC721InvalidReceiver",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "ERC721InvalidSender",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ERC721NonexistentToken",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "ERC721OutOfBoundsIndex",
      type: "error",
    },
    {
      inputs: [],
      name: "EnforcedPause",
      type: "error",
    },
    {
      inputs: [],
      name: "ExpectedPause",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidAddress",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidBatchMintParams",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidEmergencyTransfer",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidLimits",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidParams",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidProof",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidRoyaltyParams",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidURI",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidWLTimes",
      type: "error",
    },
    {
      inputs: [],
      name: "LimitExceededOrWrongPayment",
      type: "error",
    },
    {
      inputs: [],
      name: "NoBalance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      inputs: [],
      name: "PaidMintUnavailable",
      type: "error",
    },
    {
      inputs: [],
      name: "PublicMintUnavailable",
      type: "error",
    },
    {
      inputs: [],
      name: "ReentrancyGuardReentrantCall",
      type: "error",
    },
    {
      inputs: [],
      name: "SBTCannotBeApproved",
      type: "error",
    },
    {
      inputs: [],
      name: "SupplyOrLimitExceeded",
      type: "error",
    },
    {
      inputs: [],
      name: "TransferFailed",
      type: "error",
    },
    {
      inputs: [],
      name: "TransferNotAllowed",
      type: "error",
    },
    {
      inputs: [],
      name: "WLNotActive",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "t",
          type: "uint256",
        },
      ],
      name: "AccountPaused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "t",
          type: "uint256",
        },
      ],
      name: "AccountUnpaused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "t",
          type: "uint256",
        },
      ],
      name: "Burned",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "f",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "t",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "o",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "r",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "tm",
          type: "uint256",
        },
      ],
      name: "Emergency",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "enum BearthNFT.Phase",
          name: "p",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "t",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "s",
          type: "bool",
        },
      ],
      name: "Minted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Paused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "enum BearthNFT.Phase",
          name: "p",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "t",
          type: "uint256",
        },
      ],
      name: "PhaseChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "u",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "t",
          type: "uint256",
        },
      ],
      name: "Revealed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bool",
          name: "e",
          type: "bool",
        },
      ],
      name: "SBTChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Unpaused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "r",
          type: "bytes32",
        },
      ],
      name: "WLRootSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "r",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "s",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "e",
          type: "uint256",
        },
      ],
      name: "WLSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "s",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "e",
          type: "uint256",
        },
      ],
      name: "WLTimesSet",
      type: "event",
    },
    {
      inputs: [],
      name: "ACCOUNT_PAUSER_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "EMERGENCY_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MAX_SUPPLY",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PAUSER_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PRICE",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "REVEAL_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "ROYALTY_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "STAGE1_SUPPLY",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "WITHDRAWER_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "WL_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]",
        },
      ],
      name: "batchBurn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "batchMint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "f",
          type: "address",
        },
        {
          internalType: "address",
          name: "t",
          type: "address",
        },
        {
          internalType: "string",
          name: "r",
          type: "string",
        },
      ],
      name: "emergencyTransfer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getApproved",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getData",
      outputs: [
        {
          internalType: "enum BearthNFT.Phase",
          name: "",
          type: "uint8",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "a",
          type: "address",
        },
      ],
      name: "getInfo",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleAdmin",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "hasRole",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "isApprovedForAll",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "a",
          type: "address",
        },
        {
          internalType: "bytes32[]",
          name: "p",
          type: "bytes32[]",
        },
      ],
      name: "isWL",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "limit1",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "limit2",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "minted",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "q",
          type: "uint256",
        },
      ],
      name: "paidMint",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "pause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "pauseAccount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "paused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "pausedAccounts",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "phase",
      outputs: [
        {
          internalType: "enum BearthNFT.Phase",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "publicMint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "callerConfirmation",
          type: "address",
        },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "u",
          type: "string",
        },
      ],
      name: "reveal",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "revealCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "root",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "salePrice",
          type: "uint256",
        },
      ],
      name: "royaltyInfo",
      outputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "sbt",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "op",
          type: "address",
        },
        {
          internalType: "bool",
          name: "a",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "l1",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "l2",
          type: "uint256",
        },
      ],
      name: "setLimits",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "enum BearthNFT.Phase",
          name: "p",
          type: "uint8",
        },
      ],
      name: "setPhase",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "r",
          type: "address",
        },
        {
          internalType: "uint96",
          name: "b",
          type: "uint96",
        },
      ],
      name: "setRoyalty",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "e",
          type: "bool",
        },
      ],
      name: "setSBT",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "r",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "s",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "e",
          type: "uint256",
        },
      ],
      name: "setWL",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "s",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "e",
          type: "uint256",
        },
      ],
      name: "setWLTimes",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "r",
          type: "bytes32",
        },
      ],
      name: "setWhitelist",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "stage1Minted",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "i",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "tokenByIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "tokenOfOwnerByIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "unpause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "unpauseAccount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "t",
          type: "address",
        },
      ],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "wlEnd",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32[]",
          name: "p",
          type: "bytes32[]",
        },
      ],
      name: "wlMint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "wlMinted",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "wlStart",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  bytecode:
    "0x608060405260016014556003601555348015610019575f5ffd5b506040516141a93803806141a9833981016040819052610038916104a2565b3385855f61004683826105d6565b50600161005382826105d6565b50506001600e55506001600160a01b03811661008957604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6100928161024a565b506001600160a01b03821615806100a857508251155b806100ba57506001600160a01b038116155b156100d857604051635435b28960e11b815260040160405180910390fd5b601a6100e484826105d6565b506018805460ff191660011790556100fc5f8361029b565b506101075f8261029b565b506101327fdcafc294b1f1d23b81c2d8f3b760d3d1ada4d9e4f865ba6e5173f9560600d7548261029b565b5061015c7e6b97d3b00e0cfa27932db8d8710f84e2b8d72f339a1e910bf97a09597e99d68261029b565b506101877f10dac8c06a04bec0b551627dad28bc00d6516b0caacd1c7b345fcdb5211334e48261029b565b506101b27f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a8261029b565b506101dd7feb54e1feee3ae17add098cbf58a47457bf5f7c3a89ceab263cbdb01b3da6d98e8261029b565b506102087fbf233dd2aafeb4d50879c4aa5c81e96d92f6e6945c906a58f9f2d1c1631b4b268261029b565b506102337fbc3bede9c13127d9f696fc0d163537e2d7209c1bcb089ad5680b00700535ea4c8261029b565b50610240336101f4610348565b5050505050610690565b600f80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b5f828152600c602090815260408083206001600160a01b038516845290915281205460ff1661033f575f838152600c602090815260408083206001600160a01b03861684529091529020805460ff191660011790556102f73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610342565b505f5b92915050565b6127106001600160601b03821681101561038757604051636f483d0960e01b81526001600160601b038316600482015260248101829052604401610080565b6001600160a01b0383166103b057604051635b6cc80560e11b81525f6004820152602401610080565b50604080518082019091526001600160a01b039092168083526001600160601b039091166020909201829052600160a01b90910217600a55565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011261040d575f5ffd5b81516001600160401b03811115610426576104266103ea565b604051601f8201601f19908116603f011681016001600160401b0381118282101715610454576104546103ea565b60405281815283820160200185101561046b575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b80516001600160a01b038116811461049d575f5ffd5b919050565b5f5f5f5f5f60a086880312156104b6575f5ffd5b85516001600160401b038111156104cb575f5ffd5b6104d7888289016103fe565b602088015190965090506001600160401b038111156104f4575f5ffd5b610500888289016103fe565b604088015190955090506001600160401b0381111561051d575f5ffd5b610529888289016103fe565b93505061053860608701610487565b915061054660808701610487565b90509295509295909350565b600181811c9082168061056657607f821691505b60208210810361058457634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156105d157805f5260205f20601f840160051c810160208510156105af5750805b601f840160051c820191505b818110156105ce575f81556001016105bb565b50505b505050565b81516001600160401b038111156105ef576105ef6103ea565b610603816105fd8454610552565b8461058a565b6020601f821160018114610635575f831561061e5750848201515b5f19600385901b1c1916600184901b1784556105ce565b5f84815260208120601f198516915b828110156106645787850151825560209485019460019092019101610644565b508482101561068157868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b613b0c8061069d5f395ff3fe60806040526004361061040b575f3560e01c806378a9238011610215578063c4590d3f1161011e578063dc8e92ea116100a8578063eebfbe2311610078578063eebfbe2314610cb9578063f2fde38b14610cd8578063f64a8f2614610cf7578063fcd0477614610d0c578063ffdd5cf114610d2b575f5ffd5b8063dc8e92ea14610c33578063e63ab1e914610c52578063e985e9c514610c85578063ebf0c71714610ca4575f5ffd5b8063cdb8322e116100ee578063cdb8322e14610b9d578063cee232bb14610bb2578063d16825ac14610bc7578063d547741f14610be6578063d70299ca14610c05575f5ffd5b8063c4590d3f14610b0c578063c87b56dd14610b2b578063ca8191d614610b4a578063cb9fcffb14610b6a575f5ffd5b8063a217fddf1161019f578063b1324f7b1161016f578063b1324f7b14610a69578063b1c9fe6e14610a82578063b88d4fde14610aaf578063bf86637214610ace578063c03afb5914610aed575f5ffd5b8063a217fddf14610a03578063a22cb46514610a16578063aed5be3514610a35578063b0ea7dcf14610a4a575f5ffd5b80638da5cb5b116101e55780638da5cb5b146109755780638f2fc60b1461099257806391d14854146109b157806394408b9a146109d057806395d89b41146109ef575f5ffd5b806378a92380146108e95780638456cb591461091457806385f438c1146109285780638d859f3e1461095b575f5ffd5b80633f4ba83a116103175780635b66b851116102a15780636352211e116102715780636352211e1461086557806365cde7331461088457806370a0823114610897578063715018a6146108b65780637878fe39146108ca575f5ffd5b80635b66b851146107d45780635c975abb146107e95780635f1770a21461080057806361a1336114610832575f5ffd5b8063440bc7f3116102e7578063440bc7f314610739578063484d1ad6146107585780634c261247146107775780634f6ccce71461079657806351cff8d9146107b5575f5ffd5b80633f4ba83a146106c857806342842e0e146106dc57806342966c68146106fb57806343508b051461071a575f5ffd5b806323b872dd116103985780632f2ff15d116103685780632f2ff15d146106055780632f745c591461062457806332cb6b0c1461064357806336568abe146106585780633bc5de3014610677575f5ffd5b806323b872dd14610566578063248a9ca31461058557806326092b83146105b35780632a55205a146105c7575f5ffd5b8063081812fc116103de578063081812fc1461049c578063095ea7b3146104d357806318160ddd146104f45780631e7269c51461050857806320df435914610533575f5ffd5b806301ffc9a71461040f5780630489cf6e1461044357806306fdde0314610466578063077fce5214610487575b5f5ffd5b34801561041a575f5ffd5b5061042e61042936600461317e565b610d7a565b60405190151581526020015b60405180910390f35b34801561044e575f5ffd5b5061045860115481565b60405190815260200161043a565b348015610471575f5ffd5b5061047a610d8a565b60405161043a91906131c7565b348015610492575f5ffd5b50610458601c5481565b3480156104a7575f5ffd5b506104bb6104b63660046131d9565b610e19565b6040516001600160a01b03909116815260200161043a565b3480156104de575f5ffd5b506104f26104ed366004613204565b610e40565b005b3480156104ff575f5ffd5b50600854610458565b348015610513575f5ffd5b5061045861052236600461322e565b60166020525f908152604090205481565b34801561053e575f5ffd5b506104587fbf233dd2aafeb4d50879c4aa5c81e96d92f6e6945c906a58f9f2d1c1631b4b2681565b348015610571575f5ffd5b506104f2610580366004613249565b610e72565b348015610590575f5ffd5b5061045861059f3660046131d9565b5f908152600c602052604090206001015490565b3480156105be575f5ffd5b506104f2610f00565b3480156105d2575f5ffd5b506105e66105e1366004613287565b611029565b604080516001600160a01b03909316835260208301919091520161043a565b348015610610575f5ffd5b506104f261061f3660046132a7565b6110ae565b34801561062f575f5ffd5b5061045861063e366004613204565b6110d2565b34801561064e575f5ffd5b5061045861025e81565b348015610663575f5ffd5b506104f26106723660046132a7565b611135565b348015610682575f5ffd5b50600f54601b54601c5460185460195460145460155460405161043a97600160a01b900460ff908116979661025e96909591169390929091666ba5b080b1c00090613309565b3480156106d3575f5ffd5b506104f261116d565b3480156106e7575f5ffd5b506104f26106f6366004613249565b6111a2565b348015610706575f5ffd5b506104f26107153660046131d9565b6111bc565b348015610725575f5ffd5b506104f2610734366004613204565b611237565b348015610744575f5ffd5b506104f26107533660046131d9565b611307565b348015610763575f5ffd5b506104f261077236600461322e565b61135b565b348015610782575f5ffd5b506104f26107913660046133e1565b6113e5565b3480156107a1575f5ffd5b506104586107b03660046131d9565b611481565b3480156107c0575f5ffd5b506104f26107cf36600461322e565b6114d6565b3480156107df575f5ffd5b5061045860125481565b3480156107f4575f5ffd5b50600d5460ff1661042e565b34801561080b575f5ffd5b506104587e6b97d3b00e0cfa27932db8d8710f84e2b8d72f339a1e910bf97a09597e99d681565b34801561083d575f5ffd5b506104587fbc3bede9c13127d9f696fc0d163537e2d7209c1bcb089ad5680b00700535ea4c81565b348015610870575f5ffd5b506104bb61087f3660046131d9565b6115cd565b6104f26108923660046131d9565b6115d7565b3480156108a2575f5ffd5b506104586108b136600461322e565b61173b565b3480156108c1575f5ffd5b506104f2611780565b3480156108d5575f5ffd5b506104f26108e4366004613426565b611791565b3480156108f4575f5ffd5b5061045861090336600461322e565b60136020525f908152604090205481565b34801561091f575f5ffd5b506104f261182b565b348015610933575f5ffd5b506104587f10dac8c06a04bec0b551627dad28bc00d6516b0caacd1c7b345fcdb5211334e481565b348015610966575f5ffd5b50610458666ba5b080b1c00081565b348015610980575f5ffd5b50600f546001600160a01b03166104bb565b34801561099d575f5ffd5b506104f26109ac36600461344f565b61185d565b3480156109bc575f5ffd5b5061042e6109cb3660046132a7565b6118cf565b3480156109db575f5ffd5b506104f26109ea36600461322e565b6118f9565b3480156109fa575f5ffd5b5061047a611974565b348015610a0e575f5ffd5b506104585f81565b348015610a21575f5ffd5b506104f2610a3036600461349a565b611983565b348015610a40575f5ffd5b5061045860195481565b348015610a55575f5ffd5b506104f2610a6436600461350e565b6119b1565b348015610a74575f5ffd5b5060185461042e9060ff1681565b348015610a8d575f5ffd5b50600f54610aa290600160a01b900460ff1681565b60405161043a919061354d565b348015610aba575f5ffd5b506104f2610ac936600461355b565b611bbc565b348015610ad9575f5ffd5b5061042e610ae83660046135d6565b611bd4565b348015610af8575f5ffd5b506104f2610b07366004613627565b611c52565b348015610b17575f5ffd5b506104f2610b26366004613287565b611cc0565b348015610b36575f5ffd5b5061047a610b453660046131d9565b611cfc565b348015610b55575f5ffd5b506104585f516020613ab75f395f51905f5281565b348015610b75575f5ffd5b506104587feb54e1feee3ae17add098cbf58a47457bf5f7c3a89ceab263cbdb01b3da6d98e81565b348015610ba8575f5ffd5b5061045861012f81565b348015610bbd575f5ffd5b5061045860155481565b348015610bd2575f5ffd5b506104f2610be1366004613645565b611d3a565b348015610bf1575f5ffd5b506104f2610c003660046132a7565b611e1f565b348015610c10575f5ffd5b5061042e610c1f36600461322e565b60176020525f908152604090205460ff1681565b348015610c3e575f5ffd5b506104f2610c4d36600461350e565b611e43565b348015610c5d575f5ffd5b506104587f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b348015610c90575f5ffd5b5061042e610c9f3660046136de565b611f35565b348015610caf575f5ffd5b5061045860105481565b348015610cc4575f5ffd5b506104f2610cd336600461370a565b611f62565b348015610ce3575f5ffd5b506104f2610cf236600461322e565b611fab565b348015610d02575f5ffd5b5061045860145481565b348015610d17575f5ffd5b506104f2610d26366004613287565b611fe5565b348015610d36575f5ffd5b50610d4a610d4536600461322e565b612071565b6040805195865260208601949094529115159284019290925290151560608301521515608082015260a00161043a565b5f610d84826121e4565b92915050565b60605f8054610d9890613723565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc490613723565b8015610e0f5780601f10610de657610100808354040283529160200191610e0f565b820191905f5260205f20905b815481529060010190602001808311610df257829003601f168201915b5050505050905090565b5f610e2382612208565b505f828152600460205260409020546001600160a01b0316610d84565b60185460ff1615610e645760405163a36582a560e01b815260040160405180910390fd5b610e6e8282612240565b5050565b6001600160a01b038216610ea057604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f610eac83833361224b565b9050836001600160a01b0316816001600160a01b031614610efa576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610e97565b50505050565b610f0861233a565b610f1061235e565b6002600f54600160a01b900460ff166003811115610f3057610f306132d5565b141580610f41575061025e601b5410155b80610f50575061012f601c5410155b80610f6b5750601454335f9081526016602052604090205410155b15610f8957604051637338bcbd60e11b815260040160405180910390fd5b601b80545f9182610f998361376f565b90915550335f908152601660205260408120805492935090610fba8361376f565b9091555050601c8054905f610fce8361376f565b9190505550610fdd3382612388565b600f54601854604051839233925f516020613a975f395f51905f52926110149260ff600160a01b9091048116924292911690613787565b60405180910390a3506110276001600e55565b565b5f828152600b6020526040812080548291906001600160a01b03811690600160a01b90046001600160601b03168161107c575050600a546001600160a01b03811690600160a01b90046001600160601b03165b5f6127106110936001600160601b038416896137ab565b61109d91906137c2565b9295509193505050505b9250929050565b5f828152600c60205260409020600101546110c8816123a1565b610efa83836123ab565b5f6110dc8361173b565b821061110d5760405163295f44f760e21b81526001600160a01b038416600482015260248101839052604401610e97565b506001600160a01b03919091165f908152600660209081526040808320938352929052205490565b6001600160a01b038116331461115e5760405163334bd91960e11b815260040160405180910390fd5b611168828261243c565b505050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a611197816123a1565b61119f6124a7565b50565b61116883838360405180602001604052805f815250611bbc565b5f818152600260205260409020546001600160a01b03163381146111f357604051638cd22d1960e01b815260040160405180910390fd5b6111fc826124f9565b604051428152829033907f23ff0e75edf108e3d0392d92e13e8c8a868ef19001bd49f9e94876dc46dff87f9060200160405180910390a35050565b5f611241816123a1565b6001600160a01b0383161580611255575081155b8061126e575061025e82601b5461126c91906137e1565b115b1561128c5760405163b21074fd60e01b815260040160405180910390fd5b5f5b82811015610efa57601b80545f91826112a68361376f565b9190505590506112b68582612388565b600f5460185460405183926001600160a01b038916925f516020613a975f395f51905f52926112f69260ff600160a01b9091048116924292911690613787565b60405180910390a35060010161128e565b5f516020613ab75f395f51905f5261131e816123a1565b60108290556040518281527f04c25ffab6010195d1d771437d381400dae559b99722a6f554ba9c6a7292085a906020015b60405180910390a15050565b7fbc3bede9c13127d9f696fc0d163537e2d7209c1bcb089ad5680b00700535ea4c611385816123a1565b6001600160a01b0382165f8181526017602052604090819020805460ff19166001179055517fe1356d1b4e335a360d5f6d316f8e6edd07a93a6e42860a1e050a39a23d407f11906113d99042815260200190565b60405180910390a25050565b7e6b97d3b00e0cfa27932db8d8710f84e2b8d72f339a1e910bf97a09597e99d661140e816123a1565b81515f0361142f57604051633ba0191160e01b815260040160405180910390fd5b601a61143b8382613838565b5060198054905f61144b8361376f565b91905055507fb8c1ac940ded1aa978d3aa731d336abbdb3a52bbd18626855a4e73e4d23eea5c824260405161134f9291906138f3565b5f61148b60085490565b82106114b35760405163295f44f760e21b81525f600482015260248101839052604401610e97565b600882815481106114c6576114c6613914565b905f5260205f2001549050919050565b7f10dac8c06a04bec0b551627dad28bc00d6516b0caacd1c7b345fcdb5211334e4611500816123a1565b61150861235e565b6001600160a01b03821661152f5760405163e6c4247b60e01b815260040160405180910390fd5b475f81900361155157604051636165515360e11b815260040160405180910390fd5b5f836001600160a01b0316826040515f6040518083038185875af1925050503d805f811461159a576040519150601f19603f3d011682016040523d82523d5f602084013e61159f565b606091505b50509050806115c1576040516312171d8360e31b815260040160405180910390fd5b5050610e6e6001600e55565b5f610d8482612208565b6115df61233a565b6115e761235e565b6003600f54600160a01b900460ff166003811115611607576116076132d5565b141580611612575080155b8061162b575061025e81601b5461162991906137e1565b115b1561164957604051635f65d17f60e11b815260040160405180910390fd5b601554335f908152601660205260409020546116669083906137e1565b1180611681575061167e81666ba5b080b1c0006137ab565b34105b1561169e5760405162c09e0d60e41b815260040160405180910390fd5b5f5b8181101561173057601b80545f91826116b88361376f565b90915550335f9081526016602052604081208054929350906116d98361376f565b91905055506116e83382612388565b600f54601854604051839233925f516020613a975f395f51905f529261171f9260ff600160a01b9091048116924292911690613787565b60405180910390a3506001016116a0565b5061119f6001600e55565b5f6001600160a01b038216611765576040516322718ad960e21b81525f6004820152602401610e97565b506001600160a01b03165f9081526003602052604090205490565b611788612531565b6110275f61255e565b5f516020613ab75f395f51905f526117a8816123a1565b82821115806117b75750428211155b156117d557604051630ecbff0560e21b815260040160405180910390fd5b60108490556011839055601282905560408051858152602081018590529081018390527f7d9134214ed091ec1dc91e38e28e3ebcd4096c06147c71890bdd34ca6f4cba819060600160405180910390a150505050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a611855816123a1565b61119f6125af565b7feb54e1feee3ae17add098cbf58a47457bf5f7c3a89ceab263cbdb01b3da6d98e611887816123a1565b6001600160a01b03831615806118a757506103e8826001600160601b0316115b156118c5576040516304e4bbf960e41b815260040160405180910390fd5b61116883836125ec565b5f918252600c602090815260408084206001600160a01b0393909316845291905290205460ff1690565b7fbc3bede9c13127d9f696fc0d163537e2d7209c1bcb089ad5680b00700535ea4c611923816123a1565b6001600160a01b0382165f8181526017602052604090819020805460ff19169055517f598a341bb3bacf68ce1b3e63186eacd1c5e12ade93d19dd1dcdecc3b77dea71a906113d99042815260200190565b606060018054610d9890613723565b60185460ff16156119a75760405163a36582a560e01b815260040160405180910390fd5b610e6e828261268e565b6119b961233a565b6119c161235e565b6001600f54600160a01b900460ff1660038111156119e1576119e16132d5565b1415806119ef575060115442105b806119fb575060125442115b15611a1957604051635725af9f60e11b815260040160405180910390fd5b61025e601b54101580611a30575061012f601c5410155b80611a4b5750601454335f9081526013602052604090205410155b15611a6957604051635ba5da7b60e11b815260040160405180910390fd5b6040516bffffffffffffffffffffffff193360601b1660208201525f90603401604051602081830303815290604052805190602001209050611ae18383808060200260200160405190810160405280939291908181526020018383602002808284375f92019190915250506010549150849050612699565b611afe576040516309bde33960e01b815260040160405180910390fd5b601b80545f9182611b0e8361376f565b90915550335f908152601660205260408120805492935090611b2f8361376f565b9091555050335f908152601360205260408120805491611b4e8361376f565b9091555050601c8054905f611b628361376f565b9190505550611b713382612388565b600f54601854604051839233925f516020613a975f395f51905f5292611ba89260ff600160a01b9091048116924292911690613787565b60405180910390a35050610e6e6001600e55565b611bc7848484610e72565b610efa33858585856126ae565b5f611c4a8383808060200260200160405190810160405280939291908181526020018383602002808284375f92019190915250506010546040516bffffffffffffffffffffffff1960608b901b166020820152909250603401905060405160208183030381529060405280519060200120612699565b949350505050565b611c5a612531565b600f805482919060ff60a01b1916600160a01b836003811115611c7f57611c7f6132d5565b02179055507fe65264342b0c60a079c9c89c73855ac517088348498810186d8c8ae6c7848ba18142604051611cb5929190613928565b60405180910390a150565b611cc8612531565b811580611cd3575080155b15611cf15760405163e773e0a960e01b815260040160405180910390fd5b601491909155601555565b6060611d0782612208565b50601a611d13836127d6565b604051602001611d24929190613943565b6040516020818303038152906040529050919050565b7fbf233dd2aafeb4d50879c4aa5c81e96d92f6e6945c906a58f9f2d1c1631b4b26611d64816123a1565b5f868152600260205260409020546001600160a01b038681169116141580611d9357506001600160a01b038416155b80611d9c575081155b15611dba5760405163074c424d60e31b815260040160405180910390fd5b611dc5858588612866565b836001600160a01b0316856001600160a01b0316877fd939a0ab3d907d51ef258825a7e0b42c1d74d6a523fd032fe11588e07224481a33878742604051611e0f94939291906139d0565b60405180910390a4505050505050565b5f828152600c6020526040902060010154611e39816123a1565b610efa838361243c565b5f5b81811015611168575f611e84848484818110611e6357611e63613914565b905060200201355f908152600260205260409020546001600160a01b031690565b9050336001600160a01b03821614611eaf57604051638cd22d1960e01b815260040160405180910390fd5b611ed0848484818110611ec457611ec4613914565b905060200201356124f9565b838383818110611ee257611ee2613914565b90506020020135336001600160a01b03167f23ff0e75edf108e3d0392d92e13e8c8a868ef19001bd49f9e94876dc46dff87f42604051611f2491815260200190565b60405180910390a350600101611e45565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b611f6a612531565b6018805460ff19168215159081179091556040519081527fd8969c101aecf13f00e4e3a0b4c8be643670e8cc4fa1bd4e65b33abdc6e12b9390602001611cb5565b611fb3612531565b6001600160a01b038116611fdc57604051631e4fbdf760e01b81525f6004820152602401610e97565b61119f8161255e565b5f516020613ab75f395f51905f52611ffc816123a1565b828211158061200b5750428211155b1561202957604051630ecbff0560e21b815260040160405180910390fd5b6011839055601282905560408051848152602081018490527f10413ae63b2eb5f1414ea755cc49af30987df7678db913855d3dd82b780fd961910160405180910390a1505050565b6001600160a01b0381165f90815260136020908152604080832054601690925282205482918291829182916001600f54600160a01b900460ff1660038111156120bc576120bc6132d5565b1480156120cb57506011544210155b80156120d957506012544211155b80156120fd57506014546001600160a01b0389165f90815260136020526040902054105b801561210c575061025e601b54105b801561211b575061012f601c54105b6002600f54600160a01b900460ff16600381111561213b5761213b6132d5565b14801561216057506014546001600160a01b038a165f90815260166020526040902054105b801561216f575061025e601b54105b801561217e575061012f601c54105b6003600f54600160a01b900460ff16600381111561219e5761219e6132d5565b1480156121c357506015546001600160a01b038b165f90815260166020526040902054105b80156121d2575061025e601b54105b939a9299509097509550909350915050565b5f6001600160e01b03198216637965db0b60e01b1480610d845750610d8482612913565b5f818152600260205260408120546001600160a01b031680610d8457604051637e27328960e01b815260048101849052602401610e97565b610e6e828233612937565b5f828152600260205260408120546001600160a01b0316801580159061227957506001600160a01b03851615155b80156122ac57506122aa7fbf233dd2aafeb4d50879c4aa5c81e96d92f6e6945c906a58f9f2d1c1631b4b26336118cf565b155b156123265760185460ff16806122c45750600d5460ff165b806122e657506001600160a01b0381165f9081526017602052604090205460ff165b8061230857506001600160a01b0385165f9081526017602052604090205460ff165b1561232657604051638cd22d1960e01b815260040160405180910390fd5b612331858585612944565b95945050505050565b600d5460ff16156110275760405163d93c066560e01b815260040160405180910390fd5b6002600e540361238157604051633ee5aeb560e01b815260040160405180910390fd5b6002600e55565b610e6e828260405180602001604052805f815250612a0f565b61119f8133612a26565b5f6123b683836118cf565b612435575f838152600c602090815260408083206001600160a01b03861684529091529020805460ff191660011790556123ed3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610d84565b505f610d84565b5f61244783836118cf565b15612435575f838152600c602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610d84565b6124af612a5f565b600d805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b5f6125055f835f61224b565b90506001600160a01b038116610e6e57604051637e27328960e01b815260048101839052602401610e97565b600f546001600160a01b031633146110275760405163118cdaa760e01b8152336004820152602401610e97565b600f80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6125b761233a565b600d805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586124dc3390565b6127106001600160601b03821681101561262b57604051636f483d0960e01b81526001600160601b038316600482015260248101829052604401610e97565b6001600160a01b03831661265457604051635b6cc80560e11b81525f6004820152602401610e97565b50604080518082019091526001600160a01b039092168083526001600160601b039091166020909201829052600160a01b90910217600a55565b610e6e338383612a82565b5f826126a58584612b20565b14949350505050565b6001600160a01b0383163b156127cf57604051630a85bd0160e11b81526001600160a01b0384169063150b7a02906126f0908890889087908790600401613a18565b6020604051808303815f875af192505050801561272a575060408051601f3d908101601f1916820190925261272791810190613a54565b60015b612791573d808015612757576040519150601f19603f3d011682016040523d82523d5f602084013e61275c565b606091505b5080515f0361278957604051633250574960e11b81526001600160a01b0385166004820152602401610e97565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b146127cd57604051633250574960e11b81526001600160a01b0385166004820152602401610e97565b505b5050505050565b60605f6127e283612b62565b60010190505f8167ffffffffffffffff81111561280157612801613356565b6040519080825280601f01601f19166020018201604052801561282b576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461283557509392505050565b6001600160a01b03821661288f57604051633250574960e11b81525f6004820152602401610e97565b5f61289b83835f61224b565b90506001600160a01b0381166128c757604051637e27328960e01b815260048101839052602401610e97565b836001600160a01b0316816001600160a01b031614610efa576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610e97565b5f6001600160e01b0319821663152a902d60e11b1480610d845750610d8482612c39565b6111688383836001612c5d565b5f5f612951858585612d61565b90506001600160a01b0381166129ad576129a884600880545f838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6129d0565b846001600160a01b0316816001600160a01b0316146129d0576129d08185612e53565b6001600160a01b0385166129ec576129e784612ed0565b611c4a565b846001600160a01b0316816001600160a01b031614611c4a57611c4a8585612f77565b612a198383612fc5565b611168335f8585856126ae565b612a3082826118cf565b610e6e5760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610e97565b600d5460ff1661102757604051638dfc202b60e01b815260040160405180910390fd5b6001600160a01b038216612ab457604051630b61174360e31b81526001600160a01b0383166004820152602401610e97565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b5f81815b8451811015612b5a57612b5082868381518110612b4357612b43613914565b6020026020010151613026565b9150600101612b24565b509392505050565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310612ba05772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310612bcc576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310612bea57662386f26fc10000830492506010015b6305f5e1008310612c02576305f5e100830492506008015b6127108310612c1657612710830492506004015b60648310612c28576064830492506002015b600a8310610d845760010192915050565b5f6001600160e01b0319821663780e9d6360e01b1480610d845750610d8482613055565b8080612c7157506001600160a01b03821615155b15612d32575f612c8084612208565b90506001600160a01b03831615801590612cac5750826001600160a01b0316816001600160a01b031614155b8015612cbf5750612cbd8184611f35565b155b15612ce85760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610e97565b8115612d305783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b5f828152600260205260408120546001600160a01b0390811690831615612d8d57612d8d8184866130a4565b6001600160a01b03811615612dc757612da85f855f5f612c5d565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615612df5576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b5f612e5d8361173b565b5f838152600760209081526040808320546001600160a01b0388168452600690925290912091925090818314612eb2575f83815260208281526040808320548584528184208190558352600790915290208290555b5f938452600760209081526040808620869055938552525081205550565b6008545f90612ee190600190613a6f565b5f8381526009602052604081205460088054939450909284908110612f0857612f08613914565b905f5260205f20015490508060088381548110612f2757612f27613914565b5f918252602080832090910192909255828152600990915260408082208490558582528120556008805480612f5e57612f5e613a82565b600190038181905f5260205f20015f9055905550505050565b5f6001612f838461173b565b612f8d9190613a6f565b6001600160a01b039093165f908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160a01b038216612fee57604051633250574960e11b81525f6004820152602401610e97565b5f612ffa83835f61224b565b90506001600160a01b03811615611168576040516339e3563760e11b81525f6004820152602401610e97565b5f818310613040575f82815260208490526040902061304e565b5f8381526020839052604090205b9392505050565b5f6001600160e01b031982166380ac58cd60e01b148061308557506001600160e01b03198216635b5e139f60e01b145b80610d8457506301ffc9a760e01b6001600160e01b0319831614610d84565b6130af838383613108565b611168576001600160a01b0383166130dd57604051637e27328960e01b815260048101829052602401610e97565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610e97565b5f6001600160a01b03831615801590611c4a5750826001600160a01b0316846001600160a01b0316148061314157506131418484611f35565b80611c4a5750505f908152600460205260409020546001600160a01b03908116911614919050565b6001600160e01b03198116811461119f575f5ffd5b5f6020828403121561318e575f5ffd5b813561304e81613169565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f61304e6020830184613199565b5f602082840312156131e9575f5ffd5b5035919050565b6001600160a01b038116811461119f575f5ffd5b5f5f60408385031215613215575f5ffd5b8235613220816131f0565b946020939093013593505050565b5f6020828403121561323e575f5ffd5b813561304e816131f0565b5f5f5f6060848603121561325b575f5ffd5b8335613266816131f0565b92506020840135613276816131f0565b929592945050506040919091013590565b5f5f60408385031215613298575f5ffd5b50508035926020909101359150565b5f5f604083850312156132b8575f5ffd5b8235915060208301356132ca816131f0565b809150509250929050565b634e487b7160e01b5f52602160045260245ffd5b6004811061330557634e487b7160e01b5f52602160045260245ffd5b9052565b6101208101613318828c6132e9565b602082019990995260408101979097526060870195909552921515608086015260a085019190915260c084015260e083015261010090910152919050565b634e487b7160e01b5f52604160045260245ffd5b5f5f67ffffffffffffffff84111561338457613384613356565b50604051601f19601f85018116603f0116810181811067ffffffffffffffff821117156133b3576133b3613356565b6040528381529050808284018510156133ca575f5ffd5b838360208301375f60208583010152509392505050565b5f602082840312156133f1575f5ffd5b813567ffffffffffffffff811115613407575f5ffd5b8201601f81018413613417575f5ffd5b611c4a8482356020840161336a565b5f5f5f60608486031215613438575f5ffd5b505081359360208301359350604090920135919050565b5f5f60408385031215613460575f5ffd5b823561346b816131f0565b915060208301356001600160601b03811681146132ca575f5ffd5b80358015158114613495575f5ffd5b919050565b5f5f604083850312156134ab575f5ffd5b82356134b6816131f0565b91506134c460208401613486565b90509250929050565b5f5f83601f8401126134dd575f5ffd5b50813567ffffffffffffffff8111156134f4575f5ffd5b6020830191508360208260051b85010111156110a7575f5ffd5b5f5f6020838503121561351f575f5ffd5b823567ffffffffffffffff811115613535575f5ffd5b613541858286016134cd565b90969095509350505050565b60208101610d8482846132e9565b5f5f5f5f6080858703121561356e575f5ffd5b8435613579816131f0565b93506020850135613589816131f0565b925060408501359150606085013567ffffffffffffffff8111156135ab575f5ffd5b8501601f810187136135bb575f5ffd5b6135ca8782356020840161336a565b91505092959194509250565b5f5f5f604084860312156135e8575f5ffd5b83356135f3816131f0565b9250602084013567ffffffffffffffff81111561360e575f5ffd5b61361a868287016134cd565b9497909650939450505050565b5f60208284031215613637575f5ffd5b81356004811061304e575f5ffd5b5f5f5f5f5f60808688031215613659575f5ffd5b85359450602086013561366b816131f0565b9350604086013561367b816131f0565b9250606086013567ffffffffffffffff811115613696575f5ffd5b8601601f810188136136a6575f5ffd5b803567ffffffffffffffff8111156136bc575f5ffd5b8860208284010111156136cd575f5ffd5b959894975092955050506020019190565b5f5f604083850312156136ef575f5ffd5b82356136fa816131f0565b915060208301356132ca816131f0565b5f6020828403121561371a575f5ffd5b61304e82613486565b600181811c9082168061373757607f821691505b60208210810361375557634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b5f600182016137805761378061375b565b5060010190565b6060810161379582866132e9565b8360208301528215156040830152949350505050565b8082028115828204841417610d8457610d8461375b565b5f826137dc57634e487b7160e01b5f52601260045260245ffd5b500490565b80820180821115610d8457610d8461375b565b601f82111561116857805f5260205f20601f840160051c810160208510156138195750805b601f840160051c820191505b818110156127cf575f8155600101613825565b815167ffffffffffffffff81111561385257613852613356565b613866816138608454613723565b846137f4565b6020601f821160018114613898575f83156138815750848201515b5f19600385901b1c1916600184901b1784556127cf565b5f84815260208120601f198516915b828110156138c757878501518255602094850194600190920191016138a7565b50848210156138e457868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b604081525f6139056040830185613199565b90508260208301529392505050565b634e487b7160e01b5f52603260045260245ffd5b6040810161393682856132e9565b8260208301529392505050565b5f5f845461395081613723565b600182168015613967576001811461397c576139a9565b60ff19831686528115158202860193506139a9565b875f5260205f205f5b838110156139a157815488820152600190910190602001613985565b505081860193505b505050602f60f81b815283518060208601600184015e5f9101600101908152949350505050565b6001600160a01b03851681526060602082018190528101839052828460808301375f608084830101525f6080601f19601f860116830101905082604083015295945050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90613a4a90830184613199565b9695505050505050565b5f60208284031215613a64575f5ffd5b815161304e81613169565b81810381811115610d8457610d8461375b565b634e487b7160e01b5f52603160045260245ffdfea8637f389ea4bf747cb5f69479b1655cc2cec0b272d1e8f4fa9bc67d4d3e5c4adcafc294b1f1d23b81c2d8f3b760d3d1ada4d9e4f865ba6e5173f9560600d754a2646970667358221220dbff524d375103b4504df6540c17a95b27c415cc56a22f6a843da3904a73daa064736f6c634300081c0033",
  deployedBytecode:
    "0x60806040526004361061040b575f3560e01c806378a9238011610215578063c4590d3f1161011e578063dc8e92ea116100a8578063eebfbe2311610078578063eebfbe2314610cb9578063f2fde38b14610cd8578063f64a8f2614610cf7578063fcd0477614610d0c578063ffdd5cf114610d2b575f5ffd5b8063dc8e92ea14610c33578063e63ab1e914610c52578063e985e9c514610c85578063ebf0c71714610ca4575f5ffd5b8063cdb8322e116100ee578063cdb8322e14610b9d578063cee232bb14610bb2578063d16825ac14610bc7578063d547741f14610be6578063d70299ca14610c05575f5ffd5b8063c4590d3f14610b0c578063c87b56dd14610b2b578063ca8191d614610b4a578063cb9fcffb14610b6a575f5ffd5b8063a217fddf1161019f578063b1324f7b1161016f578063b1324f7b14610a69578063b1c9fe6e14610a82578063b88d4fde14610aaf578063bf86637214610ace578063c03afb5914610aed575f5ffd5b8063a217fddf14610a03578063a22cb46514610a16578063aed5be3514610a35578063b0ea7dcf14610a4a575f5ffd5b80638da5cb5b116101e55780638da5cb5b146109755780638f2fc60b1461099257806391d14854146109b157806394408b9a146109d057806395d89b41146109ef575f5ffd5b806378a92380146108e95780638456cb591461091457806385f438c1146109285780638d859f3e1461095b575f5ffd5b80633f4ba83a116103175780635b66b851116102a15780636352211e116102715780636352211e1461086557806365cde7331461088457806370a0823114610897578063715018a6146108b65780637878fe39146108ca575f5ffd5b80635b66b851146107d45780635c975abb146107e95780635f1770a21461080057806361a1336114610832575f5ffd5b8063440bc7f3116102e7578063440bc7f314610739578063484d1ad6146107585780634c261247146107775780634f6ccce71461079657806351cff8d9146107b5575f5ffd5b80633f4ba83a146106c857806342842e0e146106dc57806342966c68146106fb57806343508b051461071a575f5ffd5b806323b872dd116103985780632f2ff15d116103685780632f2ff15d146106055780632f745c591461062457806332cb6b0c1461064357806336568abe146106585780633bc5de3014610677575f5ffd5b806323b872dd14610566578063248a9ca31461058557806326092b83146105b35780632a55205a146105c7575f5ffd5b8063081812fc116103de578063081812fc1461049c578063095ea7b3146104d357806318160ddd146104f45780631e7269c51461050857806320df435914610533575f5ffd5b806301ffc9a71461040f5780630489cf6e1461044357806306fdde0314610466578063077fce5214610487575b5f5ffd5b34801561041a575f5ffd5b5061042e61042936600461317e565b610d7a565b60405190151581526020015b60405180910390f35b34801561044e575f5ffd5b5061045860115481565b60405190815260200161043a565b348015610471575f5ffd5b5061047a610d8a565b60405161043a91906131c7565b348015610492575f5ffd5b50610458601c5481565b3480156104a7575f5ffd5b506104bb6104b63660046131d9565b610e19565b6040516001600160a01b03909116815260200161043a565b3480156104de575f5ffd5b506104f26104ed366004613204565b610e40565b005b3480156104ff575f5ffd5b50600854610458565b348015610513575f5ffd5b5061045861052236600461322e565b60166020525f908152604090205481565b34801561053e575f5ffd5b506104587fbf233dd2aafeb4d50879c4aa5c81e96d92f6e6945c906a58f9f2d1c1631b4b2681565b348015610571575f5ffd5b506104f2610580366004613249565b610e72565b348015610590575f5ffd5b5061045861059f3660046131d9565b5f908152600c602052604090206001015490565b3480156105be575f5ffd5b506104f2610f00565b3480156105d2575f5ffd5b506105e66105e1366004613287565b611029565b604080516001600160a01b03909316835260208301919091520161043a565b348015610610575f5ffd5b506104f261061f3660046132a7565b6110ae565b34801561062f575f5ffd5b5061045861063e366004613204565b6110d2565b34801561064e575f5ffd5b5061045861025e81565b348015610663575f5ffd5b506104f26106723660046132a7565b611135565b348015610682575f5ffd5b50600f54601b54601c5460185460195460145460155460405161043a97600160a01b900460ff908116979661025e96909591169390929091666ba5b080b1c00090613309565b3480156106d3575f5ffd5b506104f261116d565b3480156106e7575f5ffd5b506104f26106f6366004613249565b6111a2565b348015610706575f5ffd5b506104f26107153660046131d9565b6111bc565b348015610725575f5ffd5b506104f2610734366004613204565b611237565b348015610744575f5ffd5b506104f26107533660046131d9565b611307565b348015610763575f5ffd5b506104f261077236600461322e565b61135b565b348015610782575f5ffd5b506104f26107913660046133e1565b6113e5565b3480156107a1575f5ffd5b506104586107b03660046131d9565b611481565b3480156107c0575f5ffd5b506104f26107cf36600461322e565b6114d6565b3480156107df575f5ffd5b5061045860125481565b3480156107f4575f5ffd5b50600d5460ff1661042e565b34801561080b575f5ffd5b506104587e6b97d3b00e0cfa27932db8d8710f84e2b8d72f339a1e910bf97a09597e99d681565b34801561083d575f5ffd5b506104587fbc3bede9c13127d9f696fc0d163537e2d7209c1bcb089ad5680b00700535ea4c81565b348015610870575f5ffd5b506104bb61087f3660046131d9565b6115cd565b6104f26108923660046131d9565b6115d7565b3480156108a2575f5ffd5b506104586108b136600461322e565b61173b565b3480156108c1575f5ffd5b506104f2611780565b3480156108d5575f5ffd5b506104f26108e4366004613426565b611791565b3480156108f4575f5ffd5b5061045861090336600461322e565b60136020525f908152604090205481565b34801561091f575f5ffd5b506104f261182b565b348015610933575f5ffd5b506104587f10dac8c06a04bec0b551627dad28bc00d6516b0caacd1c7b345fcdb5211334e481565b348015610966575f5ffd5b50610458666ba5b080b1c00081565b348015610980575f5ffd5b50600f546001600160a01b03166104bb565b34801561099d575f5ffd5b506104f26109ac36600461344f565b61185d565b3480156109bc575f5ffd5b5061042e6109cb3660046132a7565b6118cf565b3480156109db575f5ffd5b506104f26109ea36600461322e565b6118f9565b3480156109fa575f5ffd5b5061047a611974565b348015610a0e575f5ffd5b506104585f81565b348015610a21575f5ffd5b506104f2610a3036600461349a565b611983565b348015610a40575f5ffd5b5061045860195481565b348015610a55575f5ffd5b506104f2610a6436600461350e565b6119b1565b348015610a74575f5ffd5b5060185461042e9060ff1681565b348015610a8d575f5ffd5b50600f54610aa290600160a01b900460ff1681565b60405161043a919061354d565b348015610aba575f5ffd5b506104f2610ac936600461355b565b611bbc565b348015610ad9575f5ffd5b5061042e610ae83660046135d6565b611bd4565b348015610af8575f5ffd5b506104f2610b07366004613627565b611c52565b348015610b17575f5ffd5b506104f2610b26366004613287565b611cc0565b348015610b36575f5ffd5b5061047a610b453660046131d9565b611cfc565b348015610b55575f5ffd5b506104585f516020613ab75f395f51905f5281565b348015610b75575f5ffd5b506104587feb54e1feee3ae17add098cbf58a47457bf5f7c3a89ceab263cbdb01b3da6d98e81565b348015610ba8575f5ffd5b5061045861012f81565b348015610bbd575f5ffd5b5061045860155481565b348015610bd2575f5ffd5b506104f2610be1366004613645565b611d3a565b348015610bf1575f5ffd5b506104f2610c003660046132a7565b611e1f565b348015610c10575f5ffd5b5061042e610c1f36600461322e565b60176020525f908152604090205460ff1681565b348015610c3e575f5ffd5b506104f2610c4d36600461350e565b611e43565b348015610c5d575f5ffd5b506104587f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b348015610c90575f5ffd5b5061042e610c9f3660046136de565b611f35565b348015610caf575f5ffd5b5061045860105481565b348015610cc4575f5ffd5b506104f2610cd336600461370a565b611f62565b348015610ce3575f5ffd5b506104f2610cf236600461322e565b611fab565b348015610d02575f5ffd5b5061045860145481565b348015610d17575f5ffd5b506104f2610d26366004613287565b611fe5565b348015610d36575f5ffd5b50610d4a610d4536600461322e565b612071565b6040805195865260208601949094529115159284019290925290151560608301521515608082015260a00161043a565b5f610d84826121e4565b92915050565b60605f8054610d9890613723565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc490613723565b8015610e0f5780601f10610de657610100808354040283529160200191610e0f565b820191905f5260205f20905b815481529060010190602001808311610df257829003601f168201915b5050505050905090565b5f610e2382612208565b505f828152600460205260409020546001600160a01b0316610d84565b60185460ff1615610e645760405163a36582a560e01b815260040160405180910390fd5b610e6e8282612240565b5050565b6001600160a01b038216610ea057604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f610eac83833361224b565b9050836001600160a01b0316816001600160a01b031614610efa576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610e97565b50505050565b610f0861233a565b610f1061235e565b6002600f54600160a01b900460ff166003811115610f3057610f306132d5565b141580610f41575061025e601b5410155b80610f50575061012f601c5410155b80610f6b5750601454335f9081526016602052604090205410155b15610f8957604051637338bcbd60e11b815260040160405180910390fd5b601b80545f9182610f998361376f565b90915550335f908152601660205260408120805492935090610fba8361376f565b9091555050601c8054905f610fce8361376f565b9190505550610fdd3382612388565b600f54601854604051839233925f516020613a975f395f51905f52926110149260ff600160a01b9091048116924292911690613787565b60405180910390a3506110276001600e55565b565b5f828152600b6020526040812080548291906001600160a01b03811690600160a01b90046001600160601b03168161107c575050600a546001600160a01b03811690600160a01b90046001600160601b03165b5f6127106110936001600160601b038416896137ab565b61109d91906137c2565b9295509193505050505b9250929050565b5f828152600c60205260409020600101546110c8816123a1565b610efa83836123ab565b5f6110dc8361173b565b821061110d5760405163295f44f760e21b81526001600160a01b038416600482015260248101839052604401610e97565b506001600160a01b03919091165f908152600660209081526040808320938352929052205490565b6001600160a01b038116331461115e5760405163334bd91960e11b815260040160405180910390fd5b611168828261243c565b505050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a611197816123a1565b61119f6124a7565b50565b61116883838360405180602001604052805f815250611bbc565b5f818152600260205260409020546001600160a01b03163381146111f357604051638cd22d1960e01b815260040160405180910390fd5b6111fc826124f9565b604051428152829033907f23ff0e75edf108e3d0392d92e13e8c8a868ef19001bd49f9e94876dc46dff87f9060200160405180910390a35050565b5f611241816123a1565b6001600160a01b0383161580611255575081155b8061126e575061025e82601b5461126c91906137e1565b115b1561128c5760405163b21074fd60e01b815260040160405180910390fd5b5f5b82811015610efa57601b80545f91826112a68361376f565b9190505590506112b68582612388565b600f5460185460405183926001600160a01b038916925f516020613a975f395f51905f52926112f69260ff600160a01b9091048116924292911690613787565b60405180910390a35060010161128e565b5f516020613ab75f395f51905f5261131e816123a1565b60108290556040518281527f04c25ffab6010195d1d771437d381400dae559b99722a6f554ba9c6a7292085a906020015b60405180910390a15050565b7fbc3bede9c13127d9f696fc0d163537e2d7209c1bcb089ad5680b00700535ea4c611385816123a1565b6001600160a01b0382165f8181526017602052604090819020805460ff19166001179055517fe1356d1b4e335a360d5f6d316f8e6edd07a93a6e42860a1e050a39a23d407f11906113d99042815260200190565b60405180910390a25050565b7e6b97d3b00e0cfa27932db8d8710f84e2b8d72f339a1e910bf97a09597e99d661140e816123a1565b81515f0361142f57604051633ba0191160e01b815260040160405180910390fd5b601a61143b8382613838565b5060198054905f61144b8361376f565b91905055507fb8c1ac940ded1aa978d3aa731d336abbdb3a52bbd18626855a4e73e4d23eea5c824260405161134f9291906138f3565b5f61148b60085490565b82106114b35760405163295f44f760e21b81525f600482015260248101839052604401610e97565b600882815481106114c6576114c6613914565b905f5260205f2001549050919050565b7f10dac8c06a04bec0b551627dad28bc00d6516b0caacd1c7b345fcdb5211334e4611500816123a1565b61150861235e565b6001600160a01b03821661152f5760405163e6c4247b60e01b815260040160405180910390fd5b475f81900361155157604051636165515360e11b815260040160405180910390fd5b5f836001600160a01b0316826040515f6040518083038185875af1925050503d805f811461159a576040519150601f19603f3d011682016040523d82523d5f602084013e61159f565b606091505b50509050806115c1576040516312171d8360e31b815260040160405180910390fd5b5050610e6e6001600e55565b5f610d8482612208565b6115df61233a565b6115e761235e565b6003600f54600160a01b900460ff166003811115611607576116076132d5565b141580611612575080155b8061162b575061025e81601b5461162991906137e1565b115b1561164957604051635f65d17f60e11b815260040160405180910390fd5b601554335f908152601660205260409020546116669083906137e1565b1180611681575061167e81666ba5b080b1c0006137ab565b34105b1561169e5760405162c09e0d60e41b815260040160405180910390fd5b5f5b8181101561173057601b80545f91826116b88361376f565b90915550335f9081526016602052604081208054929350906116d98361376f565b91905055506116e83382612388565b600f54601854604051839233925f516020613a975f395f51905f529261171f9260ff600160a01b9091048116924292911690613787565b60405180910390a3506001016116a0565b5061119f6001600e55565b5f6001600160a01b038216611765576040516322718ad960e21b81525f6004820152602401610e97565b506001600160a01b03165f9081526003602052604090205490565b611788612531565b6110275f61255e565b5f516020613ab75f395f51905f526117a8816123a1565b82821115806117b75750428211155b156117d557604051630ecbff0560e21b815260040160405180910390fd5b60108490556011839055601282905560408051858152602081018590529081018390527f7d9134214ed091ec1dc91e38e28e3ebcd4096c06147c71890bdd34ca6f4cba819060600160405180910390a150505050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a611855816123a1565b61119f6125af565b7feb54e1feee3ae17add098cbf58a47457bf5f7c3a89ceab263cbdb01b3da6d98e611887816123a1565b6001600160a01b03831615806118a757506103e8826001600160601b0316115b156118c5576040516304e4bbf960e41b815260040160405180910390fd5b61116883836125ec565b5f918252600c602090815260408084206001600160a01b0393909316845291905290205460ff1690565b7fbc3bede9c13127d9f696fc0d163537e2d7209c1bcb089ad5680b00700535ea4c611923816123a1565b6001600160a01b0382165f8181526017602052604090819020805460ff19169055517f598a341bb3bacf68ce1b3e63186eacd1c5e12ade93d19dd1dcdecc3b77dea71a906113d99042815260200190565b606060018054610d9890613723565b60185460ff16156119a75760405163a36582a560e01b815260040160405180910390fd5b610e6e828261268e565b6119b961233a565b6119c161235e565b6001600f54600160a01b900460ff1660038111156119e1576119e16132d5565b1415806119ef575060115442105b806119fb575060125442115b15611a1957604051635725af9f60e11b815260040160405180910390fd5b61025e601b54101580611a30575061012f601c5410155b80611a4b5750601454335f9081526013602052604090205410155b15611a6957604051635ba5da7b60e11b815260040160405180910390fd5b6040516bffffffffffffffffffffffff193360601b1660208201525f90603401604051602081830303815290604052805190602001209050611ae18383808060200260200160405190810160405280939291908181526020018383602002808284375f92019190915250506010549150849050612699565b611afe576040516309bde33960e01b815260040160405180910390fd5b601b80545f9182611b0e8361376f565b90915550335f908152601660205260408120805492935090611b2f8361376f565b9091555050335f908152601360205260408120805491611b4e8361376f565b9091555050601c8054905f611b628361376f565b9190505550611b713382612388565b600f54601854604051839233925f516020613a975f395f51905f5292611ba89260ff600160a01b9091048116924292911690613787565b60405180910390a35050610e6e6001600e55565b611bc7848484610e72565b610efa33858585856126ae565b5f611c4a8383808060200260200160405190810160405280939291908181526020018383602002808284375f92019190915250506010546040516bffffffffffffffffffffffff1960608b901b166020820152909250603401905060405160208183030381529060405280519060200120612699565b949350505050565b611c5a612531565b600f805482919060ff60a01b1916600160a01b836003811115611c7f57611c7f6132d5565b02179055507fe65264342b0c60a079c9c89c73855ac517088348498810186d8c8ae6c7848ba18142604051611cb5929190613928565b60405180910390a150565b611cc8612531565b811580611cd3575080155b15611cf15760405163e773e0a960e01b815260040160405180910390fd5b601491909155601555565b6060611d0782612208565b50601a611d13836127d6565b604051602001611d24929190613943565b6040516020818303038152906040529050919050565b7fbf233dd2aafeb4d50879c4aa5c81e96d92f6e6945c906a58f9f2d1c1631b4b26611d64816123a1565b5f868152600260205260409020546001600160a01b038681169116141580611d9357506001600160a01b038416155b80611d9c575081155b15611dba5760405163074c424d60e31b815260040160405180910390fd5b611dc5858588612866565b836001600160a01b0316856001600160a01b0316877fd939a0ab3d907d51ef258825a7e0b42c1d74d6a523fd032fe11588e07224481a33878742604051611e0f94939291906139d0565b60405180910390a4505050505050565b5f828152600c6020526040902060010154611e39816123a1565b610efa838361243c565b5f5b81811015611168575f611e84848484818110611e6357611e63613914565b905060200201355f908152600260205260409020546001600160a01b031690565b9050336001600160a01b03821614611eaf57604051638cd22d1960e01b815260040160405180910390fd5b611ed0848484818110611ec457611ec4613914565b905060200201356124f9565b838383818110611ee257611ee2613914565b90506020020135336001600160a01b03167f23ff0e75edf108e3d0392d92e13e8c8a868ef19001bd49f9e94876dc46dff87f42604051611f2491815260200190565b60405180910390a350600101611e45565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b611f6a612531565b6018805460ff19168215159081179091556040519081527fd8969c101aecf13f00e4e3a0b4c8be643670e8cc4fa1bd4e65b33abdc6e12b9390602001611cb5565b611fb3612531565b6001600160a01b038116611fdc57604051631e4fbdf760e01b81525f6004820152602401610e97565b61119f8161255e565b5f516020613ab75f395f51905f52611ffc816123a1565b828211158061200b5750428211155b1561202957604051630ecbff0560e21b815260040160405180910390fd5b6011839055601282905560408051848152602081018490527f10413ae63b2eb5f1414ea755cc49af30987df7678db913855d3dd82b780fd961910160405180910390a1505050565b6001600160a01b0381165f90815260136020908152604080832054601690925282205482918291829182916001600f54600160a01b900460ff1660038111156120bc576120bc6132d5565b1480156120cb57506011544210155b80156120d957506012544211155b80156120fd57506014546001600160a01b0389165f90815260136020526040902054105b801561210c575061025e601b54105b801561211b575061012f601c54105b6002600f54600160a01b900460ff16600381111561213b5761213b6132d5565b14801561216057506014546001600160a01b038a165f90815260166020526040902054105b801561216f575061025e601b54105b801561217e575061012f601c54105b6003600f54600160a01b900460ff16600381111561219e5761219e6132d5565b1480156121c357506015546001600160a01b038b165f90815260166020526040902054105b80156121d2575061025e601b54105b939a9299509097509550909350915050565b5f6001600160e01b03198216637965db0b60e01b1480610d845750610d8482612913565b5f818152600260205260408120546001600160a01b031680610d8457604051637e27328960e01b815260048101849052602401610e97565b610e6e828233612937565b5f828152600260205260408120546001600160a01b0316801580159061227957506001600160a01b03851615155b80156122ac57506122aa7fbf233dd2aafeb4d50879c4aa5c81e96d92f6e6945c906a58f9f2d1c1631b4b26336118cf565b155b156123265760185460ff16806122c45750600d5460ff165b806122e657506001600160a01b0381165f9081526017602052604090205460ff165b8061230857506001600160a01b0385165f9081526017602052604090205460ff165b1561232657604051638cd22d1960e01b815260040160405180910390fd5b612331858585612944565b95945050505050565b600d5460ff16156110275760405163d93c066560e01b815260040160405180910390fd5b6002600e540361238157604051633ee5aeb560e01b815260040160405180910390fd5b6002600e55565b610e6e828260405180602001604052805f815250612a0f565b61119f8133612a26565b5f6123b683836118cf565b612435575f838152600c602090815260408083206001600160a01b03861684529091529020805460ff191660011790556123ed3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610d84565b505f610d84565b5f61244783836118cf565b15612435575f838152600c602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610d84565b6124af612a5f565b600d805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b5f6125055f835f61224b565b90506001600160a01b038116610e6e57604051637e27328960e01b815260048101839052602401610e97565b600f546001600160a01b031633146110275760405163118cdaa760e01b8152336004820152602401610e97565b600f80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6125b761233a565b600d805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586124dc3390565b6127106001600160601b03821681101561262b57604051636f483d0960e01b81526001600160601b038316600482015260248101829052604401610e97565b6001600160a01b03831661265457604051635b6cc80560e11b81525f6004820152602401610e97565b50604080518082019091526001600160a01b039092168083526001600160601b039091166020909201829052600160a01b90910217600a55565b610e6e338383612a82565b5f826126a58584612b20565b14949350505050565b6001600160a01b0383163b156127cf57604051630a85bd0160e11b81526001600160a01b0384169063150b7a02906126f0908890889087908790600401613a18565b6020604051808303815f875af192505050801561272a575060408051601f3d908101601f1916820190925261272791810190613a54565b60015b612791573d808015612757576040519150601f19603f3d011682016040523d82523d5f602084013e61275c565b606091505b5080515f0361278957604051633250574960e11b81526001600160a01b0385166004820152602401610e97565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b146127cd57604051633250574960e11b81526001600160a01b0385166004820152602401610e97565b505b5050505050565b60605f6127e283612b62565b60010190505f8167ffffffffffffffff81111561280157612801613356565b6040519080825280601f01601f19166020018201604052801561282b576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461283557509392505050565b6001600160a01b03821661288f57604051633250574960e11b81525f6004820152602401610e97565b5f61289b83835f61224b565b90506001600160a01b0381166128c757604051637e27328960e01b815260048101839052602401610e97565b836001600160a01b0316816001600160a01b031614610efa576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610e97565b5f6001600160e01b0319821663152a902d60e11b1480610d845750610d8482612c39565b6111688383836001612c5d565b5f5f612951858585612d61565b90506001600160a01b0381166129ad576129a884600880545f838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6129d0565b846001600160a01b0316816001600160a01b0316146129d0576129d08185612e53565b6001600160a01b0385166129ec576129e784612ed0565b611c4a565b846001600160a01b0316816001600160a01b031614611c4a57611c4a8585612f77565b612a198383612fc5565b611168335f8585856126ae565b612a3082826118cf565b610e6e5760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610e97565b600d5460ff1661102757604051638dfc202b60e01b815260040160405180910390fd5b6001600160a01b038216612ab457604051630b61174360e31b81526001600160a01b0383166004820152602401610e97565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b5f81815b8451811015612b5a57612b5082868381518110612b4357612b43613914565b6020026020010151613026565b9150600101612b24565b509392505050565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310612ba05772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310612bcc576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310612bea57662386f26fc10000830492506010015b6305f5e1008310612c02576305f5e100830492506008015b6127108310612c1657612710830492506004015b60648310612c28576064830492506002015b600a8310610d845760010192915050565b5f6001600160e01b0319821663780e9d6360e01b1480610d845750610d8482613055565b8080612c7157506001600160a01b03821615155b15612d32575f612c8084612208565b90506001600160a01b03831615801590612cac5750826001600160a01b0316816001600160a01b031614155b8015612cbf5750612cbd8184611f35565b155b15612ce85760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610e97565b8115612d305783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b5f828152600260205260408120546001600160a01b0390811690831615612d8d57612d8d8184866130a4565b6001600160a01b03811615612dc757612da85f855f5f612c5d565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615612df5576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b5f612e5d8361173b565b5f838152600760209081526040808320546001600160a01b0388168452600690925290912091925090818314612eb2575f83815260208281526040808320548584528184208190558352600790915290208290555b5f938452600760209081526040808620869055938552525081205550565b6008545f90612ee190600190613a6f565b5f8381526009602052604081205460088054939450909284908110612f0857612f08613914565b905f5260205f20015490508060088381548110612f2757612f27613914565b5f918252602080832090910192909255828152600990915260408082208490558582528120556008805480612f5e57612f5e613a82565b600190038181905f5260205f20015f9055905550505050565b5f6001612f838461173b565b612f8d9190613a6f565b6001600160a01b039093165f908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160a01b038216612fee57604051633250574960e11b81525f6004820152602401610e97565b5f612ffa83835f61224b565b90506001600160a01b03811615611168576040516339e3563760e11b81525f6004820152602401610e97565b5f818310613040575f82815260208490526040902061304e565b5f8381526020839052604090205b9392505050565b5f6001600160e01b031982166380ac58cd60e01b148061308557506001600160e01b03198216635b5e139f60e01b145b80610d8457506301ffc9a760e01b6001600160e01b0319831614610d84565b6130af838383613108565b611168576001600160a01b0383166130dd57604051637e27328960e01b815260048101829052602401610e97565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610e97565b5f6001600160a01b03831615801590611c4a5750826001600160a01b0316846001600160a01b0316148061314157506131418484611f35565b80611c4a5750505f908152600460205260409020546001600160a01b03908116911614919050565b6001600160e01b03198116811461119f575f5ffd5b5f6020828403121561318e575f5ffd5b813561304e81613169565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f61304e6020830184613199565b5f602082840312156131e9575f5ffd5b5035919050565b6001600160a01b038116811461119f575f5ffd5b5f5f60408385031215613215575f5ffd5b8235613220816131f0565b946020939093013593505050565b5f6020828403121561323e575f5ffd5b813561304e816131f0565b5f5f5f6060848603121561325b575f5ffd5b8335613266816131f0565b92506020840135613276816131f0565b929592945050506040919091013590565b5f5f60408385031215613298575f5ffd5b50508035926020909101359150565b5f5f604083850312156132b8575f5ffd5b8235915060208301356132ca816131f0565b809150509250929050565b634e487b7160e01b5f52602160045260245ffd5b6004811061330557634e487b7160e01b5f52602160045260245ffd5b9052565b6101208101613318828c6132e9565b602082019990995260408101979097526060870195909552921515608086015260a085019190915260c084015260e083015261010090910152919050565b634e487b7160e01b5f52604160045260245ffd5b5f5f67ffffffffffffffff84111561338457613384613356565b50604051601f19601f85018116603f0116810181811067ffffffffffffffff821117156133b3576133b3613356565b6040528381529050808284018510156133ca575f5ffd5b838360208301375f60208583010152509392505050565b5f602082840312156133f1575f5ffd5b813567ffffffffffffffff811115613407575f5ffd5b8201601f81018413613417575f5ffd5b611c4a8482356020840161336a565b5f5f5f60608486031215613438575f5ffd5b505081359360208301359350604090920135919050565b5f5f60408385031215613460575f5ffd5b823561346b816131f0565b915060208301356001600160601b03811681146132ca575f5ffd5b80358015158114613495575f5ffd5b919050565b5f5f604083850312156134ab575f5ffd5b82356134b6816131f0565b91506134c460208401613486565b90509250929050565b5f5f83601f8401126134dd575f5ffd5b50813567ffffffffffffffff8111156134f4575f5ffd5b6020830191508360208260051b85010111156110a7575f5ffd5b5f5f6020838503121561351f575f5ffd5b823567ffffffffffffffff811115613535575f5ffd5b613541858286016134cd565b90969095509350505050565b60208101610d8482846132e9565b5f5f5f5f6080858703121561356e575f5ffd5b8435613579816131f0565b93506020850135613589816131f0565b925060408501359150606085013567ffffffffffffffff8111156135ab575f5ffd5b8501601f810187136135bb575f5ffd5b6135ca8782356020840161336a565b91505092959194509250565b5f5f5f604084860312156135e8575f5ffd5b83356135f3816131f0565b9250602084013567ffffffffffffffff81111561360e575f5ffd5b61361a868287016134cd565b9497909650939450505050565b5f60208284031215613637575f5ffd5b81356004811061304e575f5ffd5b5f5f5f5f5f60808688031215613659575f5ffd5b85359450602086013561366b816131f0565b9350604086013561367b816131f0565b9250606086013567ffffffffffffffff811115613696575f5ffd5b8601601f810188136136a6575f5ffd5b803567ffffffffffffffff8111156136bc575f5ffd5b8860208284010111156136cd575f5ffd5b959894975092955050506020019190565b5f5f604083850312156136ef575f5ffd5b82356136fa816131f0565b915060208301356132ca816131f0565b5f6020828403121561371a575f5ffd5b61304e82613486565b600181811c9082168061373757607f821691505b60208210810361375557634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b5f600182016137805761378061375b565b5060010190565b6060810161379582866132e9565b8360208301528215156040830152949350505050565b8082028115828204841417610d8457610d8461375b565b5f826137dc57634e487b7160e01b5f52601260045260245ffd5b500490565b80820180821115610d8457610d8461375b565b601f82111561116857805f5260205f20601f840160051c810160208510156138195750805b601f840160051c820191505b818110156127cf575f8155600101613825565b815167ffffffffffffffff81111561385257613852613356565b613866816138608454613723565b846137f4565b6020601f821160018114613898575f83156138815750848201515b5f19600385901b1c1916600184901b1784556127cf565b5f84815260208120601f198516915b828110156138c757878501518255602094850194600190920191016138a7565b50848210156138e457868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b604081525f6139056040830185613199565b90508260208301529392505050565b634e487b7160e01b5f52603260045260245ffd5b6040810161393682856132e9565b8260208301529392505050565b5f5f845461395081613723565b600182168015613967576001811461397c576139a9565b60ff19831686528115158202860193506139a9565b875f5260205f205f5b838110156139a157815488820152600190910190602001613985565b505081860193505b505050602f60f81b815283518060208601600184015e5f9101600101908152949350505050565b6001600160a01b03851681526060602082018190528101839052828460808301375f608084830101525f6080601f19601f860116830101905082604083015295945050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90613a4a90830184613199565b9695505050505050565b5f60208284031215613a64575f5ffd5b815161304e81613169565b81810381811115610d8457610d8461375b565b634e487b7160e01b5f52603160045260245ffdfea8637f389ea4bf747cb5f69479b1655cc2cec0b272d1e8f4fa9bc67d4d3e5c4adcafc294b1f1d23b81c2d8f3b760d3d1ada4d9e4f865ba6e5173f9560600d754a2646970667358221220dbff524d375103b4504df6540c17a95b27c415cc56a22f6a843da3904a73daa064736f6c634300081c0033",
  linkReferences: {},
  deployedLinkReferences: {},
  immutableReferences: {},
  inputSourceName: "project/contracts/BearthNFT.sol",
  buildInfoId: "solc-0_8_28-b1964059bfec031c7a81a11d6171cb138a95db26",
} as const;
