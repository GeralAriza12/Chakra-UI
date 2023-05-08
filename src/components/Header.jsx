import { Box, Stack, Text, chakra } from '@chakra-ui/react'

export function Header(){
    const basicBoxStyles = {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        w:'100%',
        h:"240px",
        bgImage:"url('https://linkedinimagesdotcom.files.wordpress.com/2016/04/1229443042-colorful_sunset_sky-zvr-1400x425-mm-100.jpg')",
        bgPosition:'center',
        bgRepeat:'no-repeat',
    }

    return ( 
    <Box sx={basicBoxStyles} filter='grayscale(15%)' >
      <Box>
        <Text  fontSize='3xl' color='white' display='flex' justifyContent='center'>DOMINA EL TERRENO</Text>
        <Stack spacing={['3', '8']} direction={['column', 'row']} display='flex' justifyContent='center' flexWrap= 'wrap'>
          <chakra.button
            w={['290px', '133px']}
            h='35px'
            border={`1px solid`}
            display= 'flex'
            alignItems= 'center'
            justifyContent= 'center'
            color='white' 
            borderRadius='none' 
            _hover={{ bg: 'white', color:'black', border:'none'}}
            as='a' target='_blank' variant='outline' 
            href='https://bikeanalytics.com/componentes-bicicleta/'>
            VER DETALLES</chakra.button>
          <chakra.button 
            w={['290px', '105px']}
            h='35px'
            border={`1px solid`}
            display= 'flex'
            alignItems= 'center'
            justifyContent= 'center'
            color='white' 
            borderRadius='none' 
            _hover={{ bg: 'white', color:'black', border:'none' }}
            as='a' target='_blank' variant='outline' 
            href='https://youtu.be/x4LRLFGrliw'>
            VER VIDEO</chakra.button>
        </Stack>
      </Box>
    </Box>
    )
}

export default Header