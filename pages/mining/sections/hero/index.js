import React from 'react'
import { Flex, Box, Type, OpenModal } from 'blockstack-ui'
import { CurrencyUsdIcon } from 'mdi-react'
import { Title, Wrapper, Section, Logo, AppItem, LearnMore } from '@pages/mining/shared'
import { Hover } from 'react-powerplug'
import { StarterKitModal } from '@pages/mining/starter-kit-modal'

const Apps = ({ apps, ...rest }) => (
  <Box position="relative" width={1} {...rest}>
    {apps.map((item, i) => (i < 3 ? <AppItem app={item} key={1 + i} index={1 + i} length={4} /> : null))}
  </Box>
)

const Time = ({ ...rest }) => (
  <>
    <Type fontWeight="bolder">22D</Type> : <Type fontWeight="bolder">11H</Type> : <Type fontWeight="bolder">05M</Type>
  </>
)

const OpenStarterKitModal = ({ ...rest }) => <OpenModal component={StarterKitModal} {...rest} />

const CallToAction = ({ ...rest }) => (
  <OpenStarterKitModal>
    {({ bind: modalBind }) => (
      <Hover>
        {({ hovered, bind }) => (
          <Box
            borderRadius={2}
            overflow="hidden"
            transform={hovered ? 'translateY(-5px)' : 'unset'}
            transition={'0.1s all ease-in-out'}
            {...rest}
          >
            <Flex
              bg={hovered ? 'white' : 'blue.accent'}
              alignItems="center"
              justifyContent="center"
              px={5}
              py={6}
              color={hovered ? 'blue' : 'blue.dark'}
              cursor={hovered ? 'pointer' : 'unset'}
              transition="0.1s all ease-in-out"
              {...bind}
              {...modalBind}
            >
              <Type fontWeight={400} fontSize={3}>
                Get your App Mining Starter Kit
              </Type>
            </Flex>

            <Flex bg="#081537" alignItems="center" justifyContent="center" p={5}>
              <Type color="white" fontWeight={400} fontSize={2}>
                Next ranking starts in <Time />
              </Type>
            </Flex>
          </Box>
        )}
      </Hover>
    )}
  </OpenStarterKitModal>
)

const SubtitleBTC = ({ ...rest }) => (
  <Flex alignItems={'center'} color={'blue.accent'} {...rest}>
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      size={48}
      borderColor="blue.accent"
      border={1}
      borderRadius={80}
    >
      <CurrencyUsdIcon />
    </Flex>
    <Type fontFamily={'brand'} pl={4} lineHeight={1.55}>
      The better your app,
      <br />
      the more you earn.
    </Type>
  </Flex>
)

const Hero = ({ apps, ...rest }) => (
  <Section overflow="hidden" bg="blue.dark" {...rest}>
    <Wrapper>
      <Flex width={[1, 1, 0.5, 0.6]} flexShrink={1} flexDirection="column">
        <Logo pb={7} />
        <Title fontSize={[7, 7, 7, 8]}>Every 30 days we&nbsp;payout $100k to the best apps.</Title>
        <SubtitleBTC pt={7} />
      </Flex>
      <Flex
        pl={[0, 0, 8, 0]}
        alignItems="center"
        justifyContent="center"
        pt={[7, 7, 0, 0]}
        flexGrow={1}
        flexDirection="column"
        position="relative"
      >
        <CallToAction width={1} />
        <Apps apps={apps} mt={7} />
        <LearnMore
          display={['none', 'none', 'flex']}
          position={['absolute']}
          pt={8}
          pb={8}
          bottom={['-180px', '-180px']}
          is="a"
          href="#learn-more"
        />
      </Flex>
    </Wrapper>
  </Section>
)

export { Hero, OpenStarterKitModal }
