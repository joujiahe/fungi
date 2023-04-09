import { AddressLink } from "../AddressLink";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

export type MetaMaskAvatarProps = {
  address: string;
};

export function MetaMaskAvatar({ address }: MetaMaskAvatarProps) {
  return (
    <AddressLink address={address}>
      <Jazzicon diameter={32} seed={jsNumberForAddress(address)} />
    </AddressLink>
  );
}
