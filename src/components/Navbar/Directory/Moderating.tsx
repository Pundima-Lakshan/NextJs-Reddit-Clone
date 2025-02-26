import { FC } from "react";

import { Box, Text } from "@chakra-ui/react";

import { CommunitySnippet } from "../../../types/CommunityState";
import MenuListItem from "./MenuListItem";
import { PureflowLogoIcon } from "@/icons";

type ModeratingProps = {
  snippets: CommunitySnippet[];
};

const Moderating: FC<ModeratingProps> = ({ snippets }) => {
  return (
    <Box mt={3} mb={3}>
      <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
        MODERATING
      </Text>
      {snippets.map((snippet) => (
        <MenuListItem key={snippet.communityId} displayText={`r/${snippet.communityId}`} link={`/r/${snippet.communityId}`} icon={PureflowLogoIcon} iconColor="brand.100" />
      ))}
    </Box>
  );
};
export default Moderating;
