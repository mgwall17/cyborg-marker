import {
  Typography,
  Box,
  Grid,
  Paper,
  Divider,
  Button,
} from "@material-ui/core";
import Image from "next/image";
import WelcomeBanner from "../components/welcomeBanner";
import SingleColumnFeature from "../HomeBlocks/SingleColumnFeature.mdx";
import NewsList from "../HomeBlocks/NewsList.js"

export default function Home({ posts }) {
  return (
    <div>
      <WelcomeBanner />
      <SingleColumnFeature />
      <NewsList />
    </div>
  );
}

