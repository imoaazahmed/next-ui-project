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
  Divider,
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Textarea,
  Spinner,
  Spacer,
  Skeleton,
  RadioGroup,
  Radio,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Chip,
  CheckboxGroup,
  Checkbox,
  Breadcrumbs,
  BreadcrumbItem,
  Badge,
  Avatar,
  AvatarGroup,
  Accordion,
  AccordionItem,
  Autocomplete,
  AutocompleteItem,
} from '@/theme/components';
import { useThemeMode } from '@/hooks/use-theme-mode';
import { ChangeThemeButton, PasswordInput } from '@/components';
import { useDisclosure } from '@nextui-org/react';
import HeroCardCompleteImage from '@/assets/hero-card-complete.jpeg';
import { animals } from '@/assets/data';

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

      <Divider />

      <div className='grid grid-cols-2 gap-4 w-full'>
        <Select label='User' placeholder='Please select your name.'>
          <SelectItem key={0}>Ribal</SelectItem>
          <SelectItem key={2}>Moaaz</SelectItem>
          <SelectItem key={3}>Khaled</SelectItem>
        </Select>

        <Input label='Name' placeholder='Please enter your name.' />

        <Input label='Email' type='email' placeholder='Please enter your email' />

        <PasswordInput />

        <Autocomplete label='Select an animal' placeholder='Please select an animal'>
          {animals.map((animal) => (
            <AutocompleteItem key={animal.value} value={animal.value}>
              {animal.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        <Textarea label='Description' placeholder='Enter your description' />
      </div>

      <Divider />

      <Switch defaultSelected aria-label='Automatic updates' />

      <Divider />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima voluptatum vel, adipisci ea excepturi
        repellendus perspiciatis alias ad voluptates eum asperiores recusandae possimus placeat magni et quasi, quae
        rerum!
      </p>

      <Divider />

      <Link href='https://www.google.com' isExternal showAnchorIcon>
        Google
      </Link>

      <Divider />

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

      <Divider />

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

      <Divider />

      <Pagination total={30} initialPage={1} showControls />

      <Divider />

      <div>
        <Tooltip content='Here I am'>
          <p>Hover me please</p>
        </Tooltip>
      </div>

      <Divider />

      <Card>
        <CardHeader>This is card header</CardHeader>
        <CardBody>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </CardBody>
        <CardFooter>This is footer</CardFooter>
      </Card>

      <Divider />

      <Image isBlurred width={300} src={HeroCardCompleteImage} alt='Broken image' />

      <Divider />

      <Table aria-label='Example static collection table'>
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key='2'>
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key='3'>
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key='4'>
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Divider />

      <Spinner />

      <Divider />

      <div className='flex'>
        <p>Item 1</p>
        <Spacer x={4} />
        <p>Item 2</p>
        <Spacer x={4} />
        <p>Item 3</p>
      </div>

      <Divider />

      <div className='max-w-[300px] w-full flex items-center gap-3'>
        <div>
          <Skeleton className='flex rounded-full w-12 h-12' />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <Skeleton className='h-3 w-3/5 rounded-lg' />
          <Skeleton className='h-3 w-4/5 rounded-lg' />
        </div>
      </div>

      <Divider />

      <RadioGroup label='Select your favorite city' orientation='horizontal'>
        <Radio value='buenos-aires'>Buenos Aires</Radio>
        <Radio value='sydney'>Sydney</Radio>
        <Radio value='san-francisco'>San Francisco</Radio>
        <Radio value='london'>London</Radio>
        <Radio value='tokyo'>Tokyo</Radio>
      </RadioGroup>

      <Divider />

      <Popover placement='right'>
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className='px-1 py-2'>
            <div className='text-small font-bold'>Popover Content</div>
            <div className='text-tiny'>This is the popover content</div>
          </div>
        </PopoverContent>
      </Popover>

      <Divider />

      <Dropdown>
        <DropdownTrigger>
          <Button variant='bordered'>Open Menu</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label='Static Actions'>
          <DropdownItem key='new'>New file</DropdownItem>
          <DropdownItem key='copy'>Copy link</DropdownItem>
          <DropdownItem key='edit'>Edit file</DropdownItem>
          <DropdownItem key='delete' className='text-danger' color='danger'>
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Divider />

      <div className='flex gap-4'>
        <Chip color='default'>Default</Chip>
        <Chip color='primary'>Primary</Chip>
        <Chip color='secondary'>Secondary</Chip>
        <Chip color='success'>Success</Chip>
        <Chip color='warning'>Warning</Chip>
        <Chip color='danger'>Danger</Chip>
      </div>

      <Divider />

      <CheckboxGroup label='Select cities' defaultValue={['buenos-aires', 'london']} orientation='horizontal'>
        <Checkbox value='buenos-aires'>Buenos Aires</Checkbox>
        <Checkbox value='sydney'>Sydney</Checkbox>
        <Checkbox value='san-francisco'>San Francisco</Checkbox>
        <Checkbox value='london'>London</Checkbox>
        <Checkbox value='tokyo'>Tokyo</Checkbox>
      </CheckboxGroup>

      <Divider />

      <Breadcrumbs>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Music</BreadcrumbItem>
        <BreadcrumbItem>Artist</BreadcrumbItem>
        <BreadcrumbItem>Album</BreadcrumbItem>
        <BreadcrumbItem>Song</BreadcrumbItem>
      </Breadcrumbs>

      <Divider />

      <Badge content='5' color='primary'>
        <Avatar radius='md' size='lg' src={HeroCardCompleteImage} />
      </Badge>

      <Divider />

      <AvatarGroup isBordered>
        <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
        <Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
        <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
        <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026302d' />
        <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026702d' />
        <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
      </AvatarGroup>

      <Divider />

      <Accordion>
        <AccordionItem key='1' aria-label='Accordion 1' title='Accordion 1'>
          123
        </AccordionItem>
        <AccordionItem key='2' aria-label='Accordion 2' title='Accordion 2'>
          123
        </AccordionItem>
        <AccordionItem key='3' aria-label='Accordion 3' title='Accordion 3'>
          123
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
