import React from "react";
import {
  Theme,
  DropdownMenu,
  Button,
  Flex,
  Box,
  Card,
  Avatar,
  TextField,
} from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Overview from "./Overview";

export default function App() {
  return (
    <Theme>
      <Box
        style={{
          padding: "40px",
          paddingRight: "60px",
          width: "92%",
          margin: "auto",
        }}
      >
        <Card
          style={{
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
            border: "1px solid #e0e0e0",
          }}
        >
          <Card
            style={{
              padding: "10px",
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
              backgroundColor: "white",
              marginBottom: "20px",
            }}
          >
            <Flex align="center" justify="between">
              <Flex align="center" gap="20px" style={{ flex: 1 }}>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button variant="soft">
                      Alicia Koch
                      <DropdownMenu.TriggerIcon />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                    <DropdownMenu.Item shortcut="⌘ D">
                      Duplicate
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item shortcut="⌘ N">
                      Archive
                    </DropdownMenu.Item>
                    <DropdownMenu.Sub>
                      <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                      <DropdownMenu.SubContent>
                        <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                        <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Sub>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Share</DropdownMenu.Item>
                    <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                      Delete
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>

                <Button variant="ghost">Overview</Button>
                <Button variant="ghost">Customers</Button>
                <Button variant="ghost">Products</Button>
                <Button variant="ghost">Settings</Button>
              </Flex>

              <Flex align="center" gap="10px">
                <TextField.Root
                  className="custom-textfield"
                  placeholder="Search..."
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                    width: "200px",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <TextField.Slot>
                    <MagnifyingGlassIcon />
                  </TextField.Slot>
                </TextField.Root>
                <Avatar size="3" src="path_to_avatar" />
              </Flex>
            </Flex>
          </Card>

          <Box style={{ marginTop: "40px" }}>
            <h1 style={{ fontSize: "2.5em", marginBottom: "20px" }}>
              Dashboard
            </h1>
            <Flex gap="20px" align="center" style={{ marginBottom: "20px" }}>
              <Button variant="solid">Overview</Button>
              <Button variant="ghost">Analytics</Button>
              <Button variant="ghost">Reports</Button>
              <Button variant="ghost">Notifications</Button>
            </Flex>

            <Box
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
              }}
            >
              <Card
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  backgroundColor: "#fafafa",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                }}
              >
                <h2>Total Revenue</h2>
                <p style={{ fontSize: "2.5em" }}>$45,231.89</p>
                <p style={{ color: "green" }}>+20.1% from last month</p>
              </Card>

              <Card
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  backgroundColor: "#fafafa",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                }}
              >
                <h2>Subscriptions</h2>
                <p style={{ fontSize: "2.5em" }}>+2350</p>
                <p style={{ color: "green" }}>+180.1% from last month</p>
              </Card>

              <Card
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  backgroundColor: "#fafafa",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                }}
              >
                <h2>Sales</h2>
                <p style={{ fontSize: "2.5em" }}>+12,234</p>
                <p style={{ color: "green" }}>+19% from last month</p>
              </Card>

              <Card
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  backgroundColor: "#fafafa",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                }}
              >
                <h2>Active Now</h2>
                <p style={{ fontSize: "2.5em" }}>+573</p>
                <p style={{ color: "green" }}>+201 since last hour</p>
              </Card>
            </Box>

            <Card
              style={{
                padding: "24px",
                borderRadius: "12px",
                backgroundColor: "#fafafa",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                marginTop: "20px",
              }}
            >
              <Overview />
            </Card>
            {/* Recent Sales Section */}
            <Card
              style={{
                padding: "24px",
                borderRadius: "12px",
                backgroundColor: "#fafafa",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                marginTop: "20px",
              }}
            >
              <h2>Recent Sales</h2>
              <p>You made 265 sales this month.</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <Flex align="center">
                    <Avatar size="3" src="avatar1.png" />
                    <Box style={{ marginLeft: "10px" }}>
                      <p>Olivia Martin</p>
                      <p>olivia.martin@email.com</p>
                    </Box>
                  </Flex>
                  <p>+$1,999.00</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <Flex align="center">
                    <Avatar size="3" src="avatar2.png" />
                    <Box style={{ marginLeft: "10px" }}>
                      <p>Jackson Lee</p>
                      <p>jackson.lee@email.com</p>
                    </Box>
                  </Flex>
                  <p>+$39.00</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <Flex align="center">
                    <Avatar size="3" src="avatar3.png" />
                    <Box style={{ marginLeft: "10px" }}>
                      <p>Isabella Nguyen</p>
                      <p>isabella.nguyen@email.com</p>
                    </Box>
                  </Flex>
                  <p>+$299.00</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                  }}
                >
                  <Flex align="center">
                    <Avatar size="3" src="avatar4.png" />
                    <Box style={{ marginLeft: "10px" }}>
                      <p>William Kim</p>
                      <p>william.kim@email.com</p>
                    </Box>
                  </Flex>
                  <p>+$99.00</p>
                </li>
              </ul>
            </Card>
          </Box>
        </Card>
      </Box>
    </Theme>
  );
}
