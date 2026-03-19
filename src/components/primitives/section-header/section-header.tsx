import { Group, Stack, Title, Text } from "@mantine/core";
import { SeeAllLink } from "@/components/primitives/see-all-link/see-all-link";
import classes from "./section-header.module.scss";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  href?: string;
}

export function SectionHeader({ title, subtitle, href }: SectionHeaderProps) {
  return (
    <Group justify="space-between" align="flex-end" mb="xl">
      <Stack gap={4}>
        <Title order={2} className={classes.title}>
          {title}
        </Title>
        {subtitle && (
          <Text className={classes.subtitle}>
            {subtitle}
          </Text>
        )}
      </Stack>
      {href && <SeeAllLink href={href} />}
    </Group>
  );
}