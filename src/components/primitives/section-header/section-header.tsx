import { Group, Stack, Title, Text } from "@mantine/core";
import classes from "./section-header.module.scss";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  rightSection?: React.ReactNode;
}

export function SectionHeader({ title, subtitle, rightSection }: SectionHeaderProps) {
  return (
    <Stack gap={4} mb="1.5rem" className={classes.headerContainer}>
      {/* Title and Right Section */}
      <Group justify="space-between" align="center">
        <Title order={2} className={classes.title}>
          {title}
        </Title>
        
        {rightSection && (
          <div className={classes.rightSection}>
            {rightSection}
          </div>
        )}
      </Group>

      {/* Subtitle */}
      {subtitle && (
        <Text className={classes.subtitle}>
          {subtitle}
        </Text>
      )}
    </Stack>
  );
}