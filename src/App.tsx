import {
  Button,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  Select,
  SelectItem,
  Switch,
  Tab,
  Tabs,
  Tooltip,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from '@/theme/components';
import { useThemeMode } from '@/hooks/use-theme-mode';
import { ChangeThemeButton, PasswordInput } from '@/components';
import { useDisclosure } from '@nextui-org/react';

function App() {
  useThemeMode();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className='container mx-auto flex flex-col items-start	gap-6 my-6'>
      <div className='flex space-x-4'>
        <Button color='primary'>Click me 1</Button>
        <Button variant='bordered'>Click me 2</Button>
        <Button color='secondary'>Click me 3</Button>

        <ChangeThemeButton />
      </div>

      <div className='w-full flex flex-row gap-4 '>
        <Select label='User' placeholder='Please select your name.'>
          <SelectItem key={0}>Ribal</SelectItem>
          <SelectItem key={2}>Moaaz</SelectItem>
          <SelectItem key={3}>Khaled</SelectItem>
        </Select>

        <Input label='Name' placeholder='Please enter your name.' />
      </div>

      <div className='flex w-full flex-row gap-4'>
        <Input label='Email' type='email' placeholder='Please enter your email' />
        <PasswordInput />
      </div>

      <Switch defaultSelected aria-label='Automatic updates' />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima voluptatum vel, adipisci ea excepturi
        repellendus perspiciatis alias ad voluptates eum asperiores recusandae possimus placeat magni et quasi, quae
        rerum!
      </p>

      <Link href='https://www.google.com' isExternal showAnchorIcon>
        Google
      </Link>

      <div>
        <Button onPress={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>Modal Title</ModalHeader>
                <ModalBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                    venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                    venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.
                    Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
                    enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color='danger' variant='light' onPress={onClose}>
                    Close
                  </Button>
                  <Button color='primary' onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>

      <Tabs>
        <Tab key='tab1' title='Tab 1'>
          This is Tab 1
        </Tab>
        <Tab key='tab2' title='Tab 2'>
          This is Tab 2
        </Tab>
        <Tab key='tab3' title='Tab 3'>
          This is Tab 3
        </Tab>
      </Tabs>

      <Pagination total={30} initialPage={1} showControls />

      <div>
        <Tooltip content='Here I am'>
          <p>Hover me please</p>
        </Tooltip>
      </div>

      <Card>
        <CardHeader>This is card header</CardHeader>
        <CardBody>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </CardBody>
        <CardFooter>This is footer</CardFooter>
      </Card>
    </div>
  );
}

export default App;
