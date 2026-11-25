import { Helmet } from "react-helmet-async";
import { buildPersonSchema, buildProfilePageSchema } from "@/lib/identity";

interface PersonSchemaProps {
  /** Route path this schema is emitted on, e.g. "/md-sojib" */
  path?: string;
  description?: string;
  /** Also emit a ProfilePage node wrapping the Person (alias pages) */
  profile?: { name: string; description: string };
}

/** Emits the shared Person identity graph (with all aliases) on any route. */
const PersonSchema = ({ path = "/", description, profile }: PersonSchemaProps) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(buildPersonSchema(path, description))}
    </script>
    {profile && (
      <script type="application/ld+json">
        {JSON.stringify(buildProfilePageSchema(path, profile.name, profile.description))}
      </script>
    )}
  </Helmet>
);

export default PersonSchema;
