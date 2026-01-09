import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import ContentSection from "../Componets/Contentsection";
import {
  getContent,
  updateContent,
} from "../Service/contentService";

export default function Content() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getContent().then(setData);
  }, []);

  if (!data) return null;

  return (
    <>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Website Content
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ContentSection
            title="Hero Section"
            value={data.hero}
            fields={[
              { key: "title", label: "Hero Title" },
              { key: "subtitle", label: "Hero Subtitle" },
            ]}
            onSave={(val) => updateContent("hero", val)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ContentSection
            title="About Section"
            value={data.about}
            fields={[
              {
                key: "text",
                label: "About Text",
                multiline: true,
                rows: 4,
              },
            ]}
            onSave={(val) => updateContent("about", val)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ContentSection
            title="Contact Info"
            value={data.contact}
            fields={[
              { key: "phone", label: "Phone Number" },
              { key: "email", label: "Email Address" },
            ]}
            onSave={(val) => updateContent("contact", val)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ContentSection
            title="Footer"
            value={data.footer}
            fields={[
              {
                key: "copyright",
                label: "Footer Text",
              },
            ]}
            onSave={(val) => updateContent("footer", val)}
          />
        </Grid>
      </Grid>
    </>
  );
}
