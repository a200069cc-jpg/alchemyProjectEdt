import { Portal } from '@/components/ui/portal';
import { Text } from '@/components/ui/text';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { useState } from 'react';
import { View } from 'react-native';
import { CloseIcon } from '@/components/ui/icon';
import { HStack } from '@/components/ui/hstack';

  
export function ChatComponent (){
  const [visible, setVisible] = useState(false);
  const handleClose = () => setVisible(false);
    return(
      <View>
      <Portal isOpen={visible} >
        <HStack className="border-2 w-1/3 py-10 gap-4 rounded-lg flex-row justify-center items-center bg-background-0">
          <Text className="text-typography-950">Portal Content</Text>
          <Button
            size="xs"
            className="h-6 px-1 absolute top-2 right-2"
            variant="outline"
            onPress={handleClose}
          >
            <ButtonIcon as={CloseIcon} />
          </Button>
        </HStack>
      </Portal>
      <Button onPress={() => setVisible(!visible)}>
        <ButtonText>Chat</ButtonText>
      </Button>
    </View>
    )
}